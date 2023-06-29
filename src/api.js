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
      "X-RapidAPI-Key": "7b68bd1d44msha3ff01709ec6cd1p1fb4a4jsn1847b19156d4",
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
