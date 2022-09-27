import React from 'react';
import './Main.css'
import Filter from "../Filter";
import Vacancy from "../Vacancy";
const Main = () => {
    const vacancyList = [
        {
            id: 0,
            companyName: 'ГК "АСТРА"',
            jobName: 'Ведущий разработчик (Front-end)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/221/6/logo/medium_9b118dcbc49820342b0f7e2b4a87f904.png',
            rating: 4.74,
            skills: [
                {
                    id: 0,
                    name: 'Фронтенд разработчик',
                },
                {
                    id: 1,
                    name: 'HTML',
                },
                {
                    id: 2,
                    name: 'JavaScript',
                },
                {
                    id: 3,
                    name: 'React',
                },
            ],
            isFavorite: false,
            dateOfPublication: '22 сентября',
        },
        {
            id: 1,
            companyName: 'IRLIX',
            jobName: 'Middle/ Middle+ Frontend developer (react)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/018/3/logo/medium_ca7bfaa26d0e35a743ed5b8a9d0c8a12.png',
            rating: 4.42,
            skills: [
                {
                    id: 0,
                    name: 'Фронтенд разработчик',
                },
                {
                    id: 1,
                    name: 'HTML',
                },
                {
                    id: 2,
                    name: 'JavaScript',
                },
                {
                    id: 3,
                    name: 'React',
                },
                {
                    id: 4,
                    name: 'Webpack',
                },
                {
                    id: 5,
                    name: 'TypeScript',
                },
            ],
            isFavorite: false,
            dateOfPublication: '30 сентября',
        },
        {
            id: 2,
            companyName: 'Prodamus',
            jobName: 'Senior Frontеnd developer (React)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/177/1/logo/medium_5089eaf196d97e8b1d71da30724edb96.png',
            rating: 4,
            skills: [
                {
                    id: 0,
                    name: 'Redux',
                },
                {
                    id: 1,
                    name: 'HTML',
                },
                {
                    id: 2,
                    name: 'JavaScript',
                },
                {
                    id: 3,
                    name: 'React',
                },
                {
                    id: 4,
                    name: 'Webpack',
                },
                {
                    id: 5,
                    name: 'TypeScript',
                },
            ],
            isFavorite: false,
            dateOfPublication: '30 сентября',
        },
        {
            id: 3,
            companyName: 'IRLIX',
            jobName: 'Middle/ Middle+ Frontend developer (react)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/018/3/logo/medium_ca7bfaa26d0e35a743ed5b8a9d0c8a12.png',
            rating: 4.42,
            skills: [
                {
                    id: 0,
                    name: 'Фронтенд разработчик',
                },
                {
                    id: 1,
                    name: 'HTML',
                },
                {
                    id: 2,
                    name: 'JavaScript',
                },
                {
                    id: 3,
                    name: 'React',
                },
                {
                    id: 4,
                    name: 'Webpack',
                },
                {
                    id: 5,
                    name: 'TypeScript',
                },
            ],
            isFavorite: false,
            dateOfPublication: '30 сентября',
        },
        {
            id: 4,
            companyName: 'ГК "АСТРА"',
            jobName: 'Ведущий разработчик (Front-end)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/221/6/logo/medium_9b118dcbc49820342b0f7e2b4a87f904.png',
            rating: 4.74,
            skills: [
                {
                    id: 0,
                    name: 'Фронтенд разработчик',
                },
                {
                    id: 1,
                    name: 'HTML',
                },
                {
                    id: 2,
                    name: 'JavaScript',
                },
                {
                    id: 3,
                    name: 'React',
                },
            ],
            isFavorite: false,
            dateOfPublication: '22 сентября',
        },
    ]
    const [searchValue, setSearchValue] = React.useState('')
    React.useEffect(() =>
    {
        console.log(vacancyList)
        console.log(searchValue)
    }, [searchValue])
    return (

        <div  className={'MainWrapper'}>
            <div  className={'main'}>
                <Filter
                    setSearchValue = {setSearchValue}
                />
                {
                    vacancyList.filter((el) => el.jobName.toLowerCase().includes(searchValue.toLowerCase())).map((el) =>
                        <Vacancy
                            key = {el.id}
                            job = {el}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Main;
