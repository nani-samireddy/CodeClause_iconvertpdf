
# iConvert PDF

📄🔀✍️ iConvert PDF is a PDF to Word (.docx) conversion tool developed using the pdf4me API. It is deployed on Vercel and the frontend is built with ReactJS (Vite).

## Features

✨ Convert PDF files to Word (.docx) format.
🌟 User-friendly interface.
⚡ Fast and efficient conversion using pdf4me API.
🔄 Real-time status updates and progress tracking.
🌐 Cross-platform compatibility.

## Installation

To run iConvert PDF locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:nani-samireddy/iconvertpdf.git
   ```

2. Navigate to the project directory:

   ```bash
   cd iConvert-PDF
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and add the following environment variables:

   ```bash
   REACT_APP_PDF4ME_API_KEY=your_pdf4me_api_key
   ```

   Replace `your_pdf4me_api_key` with your own API key obtained from the pdf4me website.

5. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the development server on `http://localhost:3000`.

## Usage

1. Access iConvert PDF by opening `http://localhost:3000` in your browser.

2. Click on the "Choose File" button to select a PDF file for conversion.

3. Once the file is selected, click on the "Convert" button to initiate the conversion process.

4. The conversion progress will be displayed on the screen, along with the current status.

5. Once the conversion is complete, the Word (.docx) file will be available for download.

## Deployment

iConvert PDF is deployed on Vercel. To deploy your own instance, follow these steps:

1. Sign up for a Vercel account at https://vercel.com/.

2. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

3. Authenticate the CLI by running:

   ```bash
   vercel login
   ```

4. Navigate to the project directory and run the deployment command:

   ```bash
   vercel
   ```

5. Follow the prompts and provide the necessary information for the deployment.

6. Once the deployment is successful, Vercel will provide you with the deployment URL.

---

## Contributing

Contributions to iConvert PDF are welcome and encouraged! If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

To contribute code, follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/my-feature
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add my feature"
   ```

4. Push the changes to your fork:

   ```bash
   git push origin feature/my-feature
   ```

5. Open a pull request on the GitHub repository, describing your changes in detail.

---

## License

This project is licensed under the [MIT License](LICENSE).


Make sure to replace `your_pdf4me_api_key` with your actual API key in the installation section.