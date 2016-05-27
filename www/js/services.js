angular.module('starter.services', [])



.factory('Promotions', function(){
    var promotions = [
    {
      id: 0,
      name: 'Mi lavanderia',
      logo: 'img/lavanderia.jpg',
      text:'Hoy el Kilo de ropa sera a $10 pesos. Aprovecha esta promocion!!'

    },

    {
      id: 1,
      name: 'Cafeteria',
      logo: 'img/cafeteria.jpg',
      text:'Hoy tu cafeteria favorita pertenecera abierto hasta las 11 pm. Los esperamos!!'
    },
    {
      id: 2,
      name: 'Lavado de autos',
      logo: 'img/carwash.png',
      text:'Hoy Aspirada a mitad de Precio'
    },
    {
      id: 3,
      name:'Mensajeria',
      logo: 'img/correo.jpg',
      text:'Mas rapido y Seguro'
    },
    {
      id: 4, 
      name: 'Autos',
      logo: 'img/autos.jpg',
      text: 'Tenemos nuevas opciones para ti'
    },

    {
      id: 5,
      name:'taller',
      logo: 'img/taller.png',
      text:'Hoy no abriremos por causas mayores!!!'
    }

    ];

      return {
    all: function() {
      return promotions;
    },
    remove: function(chat) {
      promotions.splice(promotions.indexOf(promocion), 1);
    },
    get: function(promoId) {
      for (var i = 0; i <promotions.length; i++) {
        if (promotions[i].id === parseInt(promoId)) {
          return promotions[i];
        }
      }
      return null;
    }
  };

})

.factory('Notifications', function(){
    var notifications = [
    {
      id: 0,
      name: 'Mi lavanderia',
      logo: 'img/lavanderia.jpg',
      text:'Puede pasar por su ropa'

    },

    {
      id: 1,
      name: 'Cafeteria',
      logo: 'img/cafeteria.jpg',
      text:'Su mesa esta reservada'
    },
    {
      id: 2,
      name: 'Lavado de autos',
      logo: 'img/carwash.png',
      text:'Su carro ya esta limpio'
    },
    {
      id: 3,
      name:'Mensajeria',
      logo: 'img/correo.jpg',
      text:'Su correo ya llego'
    },
    {
      id: 4, 
      name: 'Autos',
      logo: 'img/autos.jpg',
      text: 'Su auto ya llego'
    },

    {
      id: 5,
      name:'taller',
      logo: 'img/taller.png',
      text:'Su carro ya esta arreglado'
    }

    ];

      return {
    all: function() {
      return notifications;
    },
    remove: function(chat) {
      notifications.splice(notifications.indexOf(notifications), 1);
    },
    get: function(notiId) {
      for (var i = 0; i < notifications.length; i++) {
        if (notifications[i].id === parseInt(notiId)) {
          return notifications[i];
        }
      }
      return null;
    }
  };

})



.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [

   {
    id: 7,
    name: 'Centro de Computo',
    lastText: 'Reparacion y venta de Computadoras',
    face: 'img/computador.jpg'
  },
  {
   id: 0,
    name: 'Mi lavanderia',
    lastText: 'Servicios de lavanderia',
    face: 'img/lavanderia.jpg',
    direccion: 'Narvarte'
  },

   {
    id: 8,
    name: 'restaurante',
    lastText: 'Restaurante Familiar',
    face: 'img/restaurant.jpg'
  }, 

   {
    id: 1,
    name: 'Cafeteria',
    lastText: 'Cafeteria',
    face: 'img/cafeteria.jpg'
  },

  {
    id: 6,
    name: 'Farmacia',
    lastText: 'Medicamentos y tratamientos',
    face: 'img/farmacia.jpg'
  }, 

   {
    id: 2,
    name: 'Lavado de Autos',
    lastText: 'Servicios de lavado de autos',
    face: 'img/carwash.png'
  }, {
    id: 3,
    name: 'Mensajeria',
    lastText: 'Servicios de mensajeria',
    face: 'img/correo.jpg'
  }, {
    id: 4,
    name: 'Autos',
    lastText: 'Se venden autos',
    face: 'img/autos.jpg'
  },

  {
    id: 5,
    name: 'taller',
    lastText: 'Bienvenidos a mi taller',
    face: 'img/taller.png'
  }
  
  ];

  var suscriptions=[

  

  {
   id: 0,
    name: 'Mi lavanderia',
    lastText: 'Servicios de lavanderia',
    face: 'img/ben.png'
  }, 

    {
    id: 2,
    name: 'Lavado de Autos',
    lastText: 'Servicios de lavado de autos',
    face: 'img/adam.jpg'
  }, 


  {
    id: 1,
    name: 'Cafeteria',
    lastText: 'Cafeteria',
    face: 'img/max.png'
  }, {
    id: 3,
    name: 'Mensajeria',
    lastText: 'Servicios de mensajeria',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Autos',
    lastText: 'Se venden autos',
    face: 'img/mike.png'
  }
  ]




  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
