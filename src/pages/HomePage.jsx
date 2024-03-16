import {
    Header,
    Carousel,
    Catalog,
    BestStuff,
    Contacts,
    Reviews,
    Footer,
} from "../components";

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Carousel />
                <Catalog />
                <BestStuff />
                <Contacts />
                <Reviews />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
