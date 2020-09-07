module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("dd8edzpf6"),
      api_key: env("916986627337732"),
      api_secret: env("BBCQkAU95kXb6CicaV3wXgGl-jI"),
    },
  },
});
