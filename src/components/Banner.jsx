import "./Banner.scss"

export const Banner = () => {

    return (
        <header className='banner'>
            <div className="banner__content">
                <h1 className="banner__title">Titre</h1>
                <p className="banner__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ad iure maiores, numquam voluptate sapiente id facilis nostrum. Minus explicabo, aperiam sapiente dicta esse obcaecati neque cupiditate magnam rerum earum!</p>
                <div className="banner__buttons">
                    <button className="banner__button banner__button--play">Lecture</button>
                    <button className="banner__button">Plus d'infos</button>
                </div>
            </div>
        </header>
    )
}
