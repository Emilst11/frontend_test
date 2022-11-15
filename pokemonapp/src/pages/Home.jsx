import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import Card from "../components/Card";
import MainLayouts from "../layouts/MainLayouts";
import { Lists } from "../store/actions/lists";
import '../styles/Home.scss'
import {AiOutlineSearch} from 'react-icons/ai'
import Pagination from "../components/Pagination";
import ListSkeleton from "../skeletons/ListSkeleton";

const Home = () => {
    const dispatch = useDispatch()
    const { data, isLoading } = useSelector(state => state.lists)
    const [page, setPage] = useState(1)
    const [post] = useState(12)
    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(Lists())
    }, [])

    const lastIndex = page * post
    const firstIndex = lastIndex - post
    const pagination = data.results?.slice(firstIndex, lastIndex)

    const filterData = data.results?.filter((item) => {
        if(search === ''){
            return item
        }else{
            return item.name.includes(search)
        }
    })

    const changes = (pages) => setPage(pages)
    return(
        <MainLayouts>
            <div className="home">
                <h1>Hello <span>user, Welcome to Pokemonapp</span></h1>
                <div className="search-box">
                    <label htmlFor="search">
                        <AiOutlineSearch/>
                    </label>
                    <input 
                    type="search" 
                    id="search" 
                    placeholder="Search here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    />
                </div>
                {
                    isLoading ? 
                    (<ListSkeleton/>)
                    :
                    (
                        <>
                            <div className="card-container">
                                {
                                    data ? 
                                    (
                                        search ? (
                                            filterData.map((item, index) =>
                                                <Card key={index} data={item}/>
                                            )
                                        ) :
                                        (pagination?.map((item, index) => 
                                            <Card key={index} data={item}/>
                                        ))
                                    ) : (
                                        <div>Loading</div>
                                    )
                                }
                            </div>
                            <Pagination posts={post} total={data.results?.length} changes={changes} page={page}/>
                        </>
                    )
                }
            </div>
        </MainLayouts>
    )
}

export default Home