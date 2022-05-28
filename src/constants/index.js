import { baby, foot, married, neurone, lock, graphic, watch, comput, cloud, avatarTwo, avatarOne, avatarThree } from '../assets';

class HomeCardOne{
    constructor(title, image){
        this.title = title;
        this.image = image;
    }
}

const homeCardsOne = [
    new HomeCardOne('Acte de naissance', baby),
    new HomeCardOne('Acte de mariage', married),
    new HomeCardOne('Acte de décès', foot),
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
    new HomeCardThree('TINE LEPENE Corine','Utilisatrice', avatarTwo, "Solution innovante et qui va énormement faciliter et simplifier non seulement la gestion mais aussi, renforcer la sécurité et la traçabilité des états civils au Cameroun. Cette transformation moderne tant attendue s'aligne si bien avec les idéaux de modernisation du Cameroun tant souhaités par le chef de l'état qui ne cesse d'encourager le developpement des infrastructures via les nouvelles technologies"),
    new HomeCardThree('Augustin NJIGUI', 'CEO & Founder INOV Consulting', avatarThree, 'L’agilité et la facilité que m’offre ce système de fonctionnement d’état civil est non seulement moderne. En plus il me permet de sauvegarder mes documents important en sureté dans mon drive. C’est une solution que je recommande fortement à tout parent.'),
    new HomeCardThree('Yannick Martin MBARGA','INOV Digital Solutions',avatarOne, "Cette solution va correspondre à la demande forte de numérisation des données d'état civil tout en assurant une conservation pérenne. Registre d'état civil a pour atout majeur de transformer le pays tout entier et ainsi, assurer un changement irréversible et universel de la condition Camerounaise, notamment sur le sujet de l’identité numérique."),
]

export {
    homeCardsThree
}








