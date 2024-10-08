import { auth, storage, signInWithPopup, GoogleAuthProvider } from './assets/js/storage.js';
import { getStorage, ref, listAll } from "firebase/storage";

const loginButton = document.getElementById('login-button');
const recentFilesList = document.getElementById('recent-files');
const totalFilesCount = document.getElementById('total-files');

loginButton.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log('Utilisateur connecté:', result.user);
            loadFiles();
        })
        .catch((error) => {
            console.error('Erreur lors de la connexion:', error);
        });
});

function loadFiles() {
    const storageRef = getStorage(storage);
    const filesRef = ref(storageRef, ''); // Remplacez par votre chemin de stockage

    listAll(filesRef)
        .then((res) => {
            recentFilesList.innerHTML = '';
            res.items.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = item.name;
                recentFilesList.appendChild(li);
            });
            totalFilesCount.textContent = res.items.length;
        })
        .catch((error) => {
            console.error('Erreur lors du chargement des fichiers:', error);
        });
}
