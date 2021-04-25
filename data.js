import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            userName: 'Aga',
            email:'aga@wp.pl',
            password: bcrypt.hashSync('aga123',8),
            isAdmin: true,
        },
        {
            userName: 'Masza',
            email:'masza@wp.pl',
            password: bcrypt.hashSync('masza123',8),
            isAdmin: false,
        },

    ],
    ads: [
        {
          
            title: "Szukam opieki nad psem",
            category: "Opieka",
            price: "30",
            description: "Wyjeżdzam na 3dni w związku z delegacją. Szukam kogoś do opieki nad moim psem",
            petType: "kundelek",
            size: "mały",
            city: "Gdańsk",
            image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
        },
        {
           
            title: "Szukam na spacer z psem",
            category: "Opieka",
            price: "10",
            description: "Potrzebuję pomocy w wyprowadzeniu psa w tygodniu w godzinach popołudniowych",
            petType: "York",
            size: "mały",
            city: "Sopot",
            image: "https://images.unsplash.com/photo-1590253277690-d21a86953022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",

        }

        
    ]
}
export default data;