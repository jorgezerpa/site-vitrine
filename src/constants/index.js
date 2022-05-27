import { baby, foot, married, neurone, lock, graphic, watch, comput, cloud, avatarTwo, avatarOne, avatarThree } from '../assets';

class HomeCardOne{
    constructor(title, image){
        this.title = title;
        this.image = image;
    }
}

const homeCardsOne = [
    new HomeCardOne('title one', baby),
    new HomeCardOne('title two', married),
    new HomeCardOne('title three', foot),
]

export {
    homeCardsOne
}


class HomeCardTwo{
    constructor(title, image, list){
        this.title = title;
        this.image = image;
        this.list = list;
    }
}

const homeCardsTwo = [
    new HomeCardTwo('Gain de temps', watch, ["Réduction dé délais des démarches.", "Réduction des audiences foraines.", "Limitation des taches inutiles."]),
    new HomeCardTwo('Numérisation des données', comput, ["Accesibilité á 100% Digitale", "Registres numériques", "Déclaration et demandes depuis l'interface digitale."]),
    new HomeCardTwo('Suivi statistiques', graphic, ["Suivi de dossieres.", "Production de reporting et métriques.", "Rapports graphiques."]),
    new HomeCardTwo('Archivage et sauvegarde de données', cloud, ["Archivage des donnés á long terme.", "Sauvegarde des registres numériques.", "Pérennisation des données."]),
    new HomeCardTwo('Sécurisation du systéme', lock, ["Authentification sécurisé.", "Espace personnel et restreint.", "traçabilité."]),
    new HomeCardTwo('Centralisation des bases de données', neurone, ["Interconnexion des systémes et centres.", "Gestion centralisée des données et registres.", "Enregistrement instantané vers la base centrale."]),
]

export {
    homeCardsTwo
}








class HomeCardThree{
    constructor(title, subtitle, image, text){
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.text = text;
    }
}

const homeCardsThree = [
    new HomeCardThree('Augustin NJIGUI', 'CEO & Founder INOV Consulting', avatarThree, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, eligendi ducimus a libero, necessitatibus, laborum laudantium laboriosam voluptatum possimus aliquam deleniti! Molestiae a earum quaerat amet tempore labore quos quia!'),
    new HomeCardThree('Yannick Martin MBARGA','INOV Digital Solutions',avatarOne, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, eligendi ducimus a libero, necessitatibus, laborum laudantium laboriosam voluptatum possimus aliquam deleniti! Molestiae a earum quaerat amet tempore labore quos quia!'),
    new HomeCardThree('TINE LEPENE Corine','Utilisatrice', avatarTwo, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, eligendi ducimus a libero, necessitatibus, laborum laudantium laboriosam voluptatum possimus aliquam deleniti! Molestiae a earum quaerat amet tempore labore quos quia!'),
]

export {
    homeCardsThree
}








