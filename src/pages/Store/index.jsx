import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

import ItemList from "../../components/ItemList";
import Spinner from "../../components/Spinner";

const Store = () => {
 const { category } = useParams();

 let [ items, setItems ] = useState([]);
 let [ loading, setLoading ] = useState(false);
 let [ fallback, setFallback ] = useState({
    visible: false,
    message: ''
 });

 useEffect(() => {
    setLoading(true);

    const itemsCollection = category
    ? query(collection(db, 'items'), where('category', '==', category))
    : collection(db, 'items');

    getDocs(itemsCollection)
    .then ((snapshot) => {
      if (snapshot.size === 0) {
        setFallback({visible: true, message: "No encontramos resultados"});
      } else {
        setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
      }
    })
    .catch((err) => {
           console.error("Errror al consultar los datos: ",err);
           setFallback({visible: true, message: "No pudimos cargar los datos"});
     })
    .finally(() => setLoading(false))
  }, []);

  return (
    <main className="store">
     { loading
      ? <Spinner />
      : fallback.visible
        ? (
            <p>{fallback.message}</p>
          )
        : (
          <>
            <aside className="store__aside">
              <p>filtros</p>
            </aside>
            <ItemList className="store__items" items={items}/>
          </>
        )
    }
    </main>
  );
}

export default Store;