import Carusel from './carusel';
import Card from './card';
import Contacts from './contacts';
import Footer from './footer';
export default function body() {
    return (
        <>
            <Carusel></Carusel>
            <div className="container-fluid">
                <div className="row">
                    <h1 className='text-center'>Nuestros productos</h1>
                    <p className='fs-5 text-center blockquote'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget ex euismod, porttitor nunc eu, tincidunt
                        nunc. Nullam euismod, nisi eget consectetur ultrices,
                        nisl nunc euismod nunc, eget tincidunt nunc nisl euismod
                        nunc.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget ex euismod, porttitor nunc eu, tincidunt
                        nunc. Nullam euismod, nisi eget consectetur ultrices,
                        nisl nunc euismod nunc, eget tincidunt nunc nisl euismod
                        nunc.

                    </p>
                </div>
                <div className="row">
                    <Card></Card>
                </div>
                <div className="row">
                    <h1 className='text-center'>Ubicanos</h1>
                </div>

                <div className="row">
                    <h1 className='text-center'>Contactanos</h1>
                    <div className="col-md-3">
                        <Contacts />
                    </div>
                    <div className="col-md-3">
                        <Contacts />
                    </div>
                    <div className="col-md-3">
                        <Contacts />
                    </div>
                    <div className="col-md-3">
                        <Contacts />
                    </div>
                </div>
                <div className="row">
                    {/*here put following */}
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
        </>
    );
}