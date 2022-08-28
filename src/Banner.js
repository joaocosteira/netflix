import './Banner.css';

const Banner = ()  =>{

    const truncate = (string,n=150) => string?.length > n ? string.substr(0,n-1) + '...' : string

    return(
        <header className="banner" style={{
            backgroundSize: "cover",
            //backgroundImage: `url("/netflix_banner.jpeg")`,
            backgroundImage: `url("/back_banner.png")`,
            backgroundPosition: "center"
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>Movie Name</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner_description'>
                    {
                        truncate("Minim culpa commodo officia eu laboris labore commodo. Ad eu culpa deserunt mollit Lorem occaecat in dolor. Ad pariatur velit aute amet cillum exercitation eiusmod eu sit voluptate sit reprehenderit consectetur. Commodo ad cillum esse aute fugiat esse quis. Aliqua laborum sit sint non ipsum elit.Aute exercitation incididunt aliquip tempor. Labore cillum duis occaecat reprehenderit voluptate. Non voluptate officia officia est aute. Commodo non elit officia excepteur cupidatat irure nulla laboris ex ullamco. Anim do exercitation enim ad deserunt laborum aliqua duis duis commodo. Aute veniam ad sunt aliquip consectetur dolore laboris cupidatat aliquip.")
                    }
                    </h1>
            </div>
            <div className='banner--fadeBottom'/>
        </header>
    )
}

export default Banner;