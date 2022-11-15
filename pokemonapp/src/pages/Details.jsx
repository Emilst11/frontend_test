import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MainLayouts from "../layouts/MainLayouts";
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { getDetail, turnBack } from "../store/actions/details";
import '../styles/Details.scss'
import DetailSkeleton from "../skeletons/DetailSkeleton";

const Details = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {data, isLoading} = useSelector(state => state.details)
    const name = params.name

    useEffect(() => {
        dispatch(getDetail(name))
    }, [params])

    const back = () =>{
        dispatch(turnBack())
    }
    return(
        <MainLayouts>
            {
                isLoading ? 
                (<DetailSkeleton/>) : 
                (
                    <div className="details">
                        <Link to='/' className="back" onClick={back}>
                            <MdOutlineKeyboardBackspace/>
                            <span>Kembali</span>
                        </Link>
                        <div className="details-profile">
                            <div className="images">
                                <img src={data?.sprites?.other?.dream_world.front_default} alt="not_found" />
                            </div>
                            <div className="text">
                                <h1>{data.name}</h1>
                                <div className="text-detail">
                                    <p>Species :</p>
                                    <p>{data?.species?.name}</p>
                                </div>
                                <div className="text-detail">
                                    <p>Height :</p>
                                    <p>{data?.height}</p>
                                </div>
                                <div className="ability">
                                    <p>Ability :</p>
                                    <div className="ability-container">
                                        {
                                            data?.abilities?.map((item, index) => 
                                                <div key={index} className="ability-container-item">{item.ability?.name}</div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stats">
                            {data?.stats?.map((item, index) => 
                                <div className="stats-box" key={index}>
                                    <p>{item?.stat?.name}</p>
                                    <div className="outer-bar">
                                        <div className="inner-bar" 
                                        style={{backgroundColor: item?.base_stat < 25 ? '#7796E4' : item?.base_stat < 50 ? '#F9B208' : '#F05E70', width: item?.base_stat + '%'}}>
                                            <p>
                                                {item?.base_stat}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
        </MainLayouts>
    )
}

export default Details