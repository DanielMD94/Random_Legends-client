import Carousel from 'react-bootstrap/Carousel';

function SkinsCarousel({ carouselChamp }) {
    console.log('soy carousel', carouselChamp)
    return (
        <Carousel fade>
            {
                carouselChamp.skins.map(skin => {
                    return (
                        <Carousel.Item key={skin}>
                            <img className="d-block w-100" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${carouselChamp.id}_${skin}.jpg`} />
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default SkinsCarousel