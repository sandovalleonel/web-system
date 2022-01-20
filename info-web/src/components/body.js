import Carusel from './carusel';
import Card from './card';
export default function body() {
    return (
        <>
            <Carusel></Carusel>
            <div className="container-fluid">
                <div className="row">
                    <h1 className='text-center'>Nuestros productos</h1>
                </div>
                <div className="row">
                    <Card></Card>
                </div>
                <div className="row">
                    <h1 className='text-center'>Ubicanos</h1>
                </div>
                
                <div className="row">
                    <h1 className='text-center'>Contacto</h1>
                </div>
            </div>
        </>
    );
}