#!/usr/bin/env python3
import sys
import PyPDF2

def pdf_to_text(input_path: str) -> str:
    text = ""
    try:
        with open(input_path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
    except Exception as e:
        sys.stderr.write(f"Error processing PDF: {str(e)}\n")
        sys.exit(1)
    return text

if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.stderr.write("Usage: pdf_to_markdown.py input.pdf\n")
        sys.exit(1)
    input_file = sys.argv[1]
    output_text = pdf_to_text(input_file)
    # 输出的内容可以直接作为 Markdown 文本
    print(output_text) 