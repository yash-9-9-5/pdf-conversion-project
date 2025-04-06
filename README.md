# PDF Converter Website

A modern web application that allows users to convert PDF files to various formats and merge PDFs. Built with Python Flask, HTML, CSS, and SQLite.

## Features

- Convert PDF to PowerPoint (PPT)
- Convert PDF to Word (DOCX)
- Convert PDF to Excel (XLSX)
- Merge multiple PDF files
- Modern and responsive design
- User-friendly interface
- File upload with progress indication

## Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pdf-converter
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install the required packages:
```bash
pip install -r requirements.txt
```

## Project Structure

```
pdf-converter/
├── app.py              # Main Flask application
├── requirements.txt    # Python dependencies
├── static/
│   └── css/
│       └── style.css  # CSS styles
├── templates/
│   └── index.html     # Main HTML template
├── uploads/           # Directory for uploaded files
└── conversions.db     # SQLite database
```

## Running the Application

1. Make sure you're in the project directory and your virtual environment is activated.

2. Run the Flask application:
```bash
python app.py
```

3. Open your web browser and navigate to:
```
http://localhost:5000
```

## Usage

1. **Convert PDF to PPT**:
   - Click on the "PDF to PPT" card
   - Upload your PDF file
   - Click "Convert to PPT"
   - Download the converted PowerPoint file

2. **Convert PDF to Word**:
   - Click on the "PDF to Word" card
   - Upload your PDF file
   - Click "Convert to Word"
   - Download the converted Word document

3. **Convert PDF to Excel**:
   - Click on the "PDF to Excel" card
   - Upload your PDF file
   - Click "Convert to Excel"
   - Download the converted Excel file

4. **Merge PDFs**:
   - Click on the "Merge PDFs" card
   - Upload two PDF files
   - Click "Merge PDFs"
   - Download the merged PDF file

## Security Notes

- The application includes basic file validation
- Maximum file size is limited to 16MB
- Only PDF files are accepted for conversion
- Uploaded files are automatically deleted after processing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Flask framework
- Various PDF conversion libraries 