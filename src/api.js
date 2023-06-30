export const convertToDocx = async (file) => {
  const url =
    "https://pdf4me.p.rapidapi.com/RapidApi/ConvertPdfToWord?quality=high";
  const data = new FormData();
  data.append("File", file);

  const options = {
    method: "POST",
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
      Accept: "*/*",
      "X-RapidAPI-Key": process.env.REACT_APP_PDF4ME_API_KEY,
      "X-RapidAPI-Host": "pdf4me.p.rapidapi.com",
    },
    body: data,
  };

  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
