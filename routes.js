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
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = 'stranger' } = request.params;
      const { lang } = request.query;

      if (lang == 'id') {
        return `Hai, ${name}`;
      }
      
      return `Hello, ${name}!`;
    }
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      const data = `${username} | ${password}`;

      return h.response(data)
        .code(201)
        .type('application/json')
        .header('X-Powered-By', "Hapi.js");

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