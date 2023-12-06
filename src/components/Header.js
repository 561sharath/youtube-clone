import React, { useEffect, useRef, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./contants";
import {
  Link,
  Navigate,
  unstable_HistoryRouter,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { TOGGLE_MENU } from "../Utils/ToggleSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const history = unstable_HistoryRouter;
  const [searchResult, setSerachresult] = useState("");
  const [suggestions, setSuggestions] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [navigate, setNavigate] = useState(false);
  const inputRef = useRef(null);
  const suggestionRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchresult();
      
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchResult]);

  useEffect(()=>{

    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  },[])

  const handleInputClick = () => {
    setShowSuggestions(true);
    // Other logic you want to execute when the input is clicked
  };

  const handleSuggestionClick = (suggestion) => {
    setSerachresult(suggestion);
    setShowSuggestions(false)
    
    navigation(`/search/${suggestion}`);
  };

  const handleSearchClick=()=>{
    navigation(`/search/${searchResult}`)
  }

  const onclickHandler = () => {
    dispatch(TOGGLE_MENU());
  };

 
  const getSearchresult = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchResult);
    const json = await data.json();
    //console.log(json,"hhih")
    setSuggestions(json[1]);
  };
  return (
    <>
      <div className=" fixed top-0 left-0 w-full grid grid-flow-col px-5 py-3 bg-white "
      >
        <div className="flex col-span-1 bg-white">
          <img
            className="h-7 px-1 cursor-pointer"
            onClick={() => onclickHandler()}
            alt="hamberger-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII="
          />

          <img
            className="h-7 mx-2"
            alt="logo"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          />
        </div>
        <div className="col-span-10 px-12 bg-white"
        
        >
          <input
            className="w-2/3 border border-gray-400 p-2 rounded-l-full"
            type="text"
            ref={inputRef}
            onClick={handleInputClick}
            placeholder="search.."
            value={searchResult}
            onChange={(e) => setSerachresult(e.target.value)}
            
            
            
          />
          <button className="border border-gray-400 px-3 py-2 rounded-r-full  bg-gray-200"

          onClick={()=>handleSearchClick()}
          >
            🔍
          </button>

          {showSuggestions && searchResult.length > 1 && suggestions && (
            <div className="fixed py-2 px-2 w-[43rem] shadow-lg rounded-lg border border-gray-200 bg-white bg-blend-overlay" ref={suggestionRef}>
              {suggestions?.map((s) => (
                <p
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100  cursor-pointer"
                  onClick={() => handleSuggestionClick(s)}
                >
                  🕗 {s}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-1 bg-white flex "
        >

          <img  className="h-9 w-10 mr-4"
          src="https://www.iconpacks.net/icons/1/free-bell-icon-860-thumb.png"/>
          <img  className="h-8 w-10 mr-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeb-c28arSTfLLVmPRJjrv9ZmwEvsJUDI9A&usqp=CAU"/>
          <img
            className="h-9 w-10 mr-4"
            alt="account-log"
            src="https://static.vecteezy.com/system/resources/previews/021/079/672/original/user-account-icon-for-your-design-only-free-png.png"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
