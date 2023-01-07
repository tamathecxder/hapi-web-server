const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello, Server!";
    }
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut"
    }
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "Ini about page";
    }
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman about tidak dapat diakses dengan method tersebut";
    }
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan!";
    }
  }
];

module.exports = routes;