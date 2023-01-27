import { db } from '../firebase';
import { useEffect, useRef, useState } from 'react';
import { onValue, ref, set, push, get } from 'firebase/database';

function PageAccueil() {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [grille, setGrille] = useState([[]]);
    const [options,setOptions] = useState({
        color:"white",
        grid:false
    });
    const grilleRef = ref(db, 'grille');

    get(grilleRef).then((snapshot) => {
        if (snapshot.exists()) {
            setGrille([...snapshot.val()]);
        }
    });

    function setColor(i,j) {
        console.log(i,j,options.color)
        grille[i][j] = options.color;
        set(
            ref(db,"grille/" + i + "/" + j), 
            grille[i][j]
            );
        setGrille(
            [...grille]
        );
    }

    function setOption(e) {
        options[e.target.name] = e.target.value;
        setOptions({...options});
    }

    function style(colonne) {
        return {
            backgroundColor: colonne,
            outline: options.grid == "true" ? "1px solid grey" : "none"
        }
    }

    return (
        <div>
            <h1>Page Accueil</h1>
            <div id="options">
                <div>
                    <label htmlFor="color">Couleur : </label>
                    <select name="color" onChange={setOption}>
                        <option value="white">Blanc</option>
                        <option value="black">Noir</option>
                        <option value="grey">Gris</option>
                        <option value="red">Rouge</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Jaune</option>
                        <option value="green">Vert</option>
                        <option value="cyan">Cyan</option>
                        <option value="blue">Bleu</option>
                        <option value="purple">Violet</option>
                        <option value="pink">Rose</option>
                        <option value="brown">Marron</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="grid">Grille : </label>
                    <select name="grid" onChange={setOption}>
                        <option value="true">Visible</option>
                        <option value="false">Invisible</option>
                    </select>
                </div>
                
            </div>
            <div id="grille">
                {grille.map((ligne, indexLigne) => {
                    return (
                        <div className='colonne' key={indexLigne}>
                            {ligne.map((colonne, indexColonne) => {
                                return <div style={style(colonne)} className={colonne + " pixel"} key={indexColonne} onClick={() => {setColor(indexLigne,indexColonne)}}></div>;
                            })}
                        </div>
                    );
                })}
            </div>
            
        </div>
    );
}

export default PageAccueil;