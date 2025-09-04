#!/usr/bin/env node
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const DOCX_PATH = path.resolve('src/content/rogaining.docx');
const OUT_PATH = path.resolve('src/content/rogaining.md');

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function extractTextFromDocx(docxPath) {
  try {
    const xml = execFileSync('unzip', ['-p', docxPath, 'word/document.xml'], {
      encoding: 'utf8',
    });

    // Basic formatting: line breaks, tabs, paragraphs
    let txt = xml
      .replace(/<w:tab\s*\/>/g, '    ')
      .replace(/<w:br\s*\/>/g, '\n')
      .replace(/<\/?w:t[^>]*>/g, '') // remove w:t tags, keep inner text
      .replace(/<\/w:p>/g, '\n\n') // paragraph break
      .replace(/<[^>]+>/g, ''); // strip remaining tags

    txt = decodeEntities(txt);

    // Line-level cleanup and light Markdown structuring
    const lines = txt.split('\n').map((l) => l.replace(/[\t\u00A0\u200B]+/g, ' ').replace(/\s+$/g, ''));
    const out = [];
    for (let raw of lines) {
      const s = raw.trim();
      if (!s) {
        out.push('');
        continue;
      }
      // Headings and bullets
      if (/^■+/.test(s)) {
        out.push('### ' + s.replace(/^■+/, '').trim());
        continue;
      }
      if (/^●+/.test(s)) {
        out.push('- ' + s.replace(/^●+/, '').trim());
        continue;
      }
      // Drop known editor artifacts
      if (/^right\d+$/.test(s)) continue;
      if (s === 'チラシ貼付け') {
        out.push('<!-- TODO: チラシ画像を挿入 -->');
        continue;
      }
      if (s === '「お申込みはこちら」クリックでフォームに飛ばす') {
        out.push('<!-- TODO: お申込みフォームへのリンクを設置 -->');
        continue;
      }
      out.push(s);
    }
    txt = out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';

    return txt;
  } catch (e) {
    console.error('Failed to read DOCX. Is unzip available and file present?', e.message);
    process.exit(1);
  }
}

function buildMarkdown(body) {
  const frontMatter = `---\n` + `title: ロゲイニングイベント\n` + `---\n\n`;
  return frontMatter + body;
}

function main() {
  if (!fs.existsSync(DOCX_PATH)) {
    console.error('DOCX not found:', DOCX_PATH);
    process.exit(1);
  }
  const body = extractTextFromDocx(DOCX_PATH);
  const md = buildMarkdown(body);
  fs.writeFileSync(OUT_PATH, md, 'utf8');
  console.log('Converted to Markdown:', OUT_PATH);
}

main();
