import {
IonButton,
IonToast,
IonIcon,
IonApp,
IonHeader,
IonContent,
IonToolbar,
IonTitle
} from '@ionic/react'; // importar componente boton
import { play as playIcon } from 'ionicons/icons'; // then we can use icon
import React, { useState } from 'react';


function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);// con esto llamamos la funcion del hook
    // y seteamos la funcion useState(a true) que es el estado inicial
    // del toast
    setTimeout(() => setShowToast(false), 1500);
  };

  return(
    <IonApp>
    <div>
      <IonHeader>
        <IonToolbar><IonTitle>My App</IonTitle></IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton color="primary" onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click me
        </IonButton>
        <IonToast isOpen={showToast} // usamos el valor que tiene esta
                  //variable que es false de useState(false)
                  message="Hello world"></IonToast>
      </IonContent>
    </div>
    </IonApp>
  );
}

export default App;
