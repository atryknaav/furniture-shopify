import { changeOption } from '@/redux/slices/sortBySlice';
import { RootState } from '@/redux/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SortBy = () => {

    const sortBy = useSelector((state: RootState) => state.sortBy);
    const dispatch = useDispatch();

  return (
    <div className=' flex gap-1 w-full'>
        <div className=' w-full'>

        Sort by
        </div>

        <select name="sortBy" id="sortBy" className=' font-light appearance-none cursor-pointer outline-none underline underline-offset-4' onChange={(e) => {dispatch(changeOption([e.target.value])); console.log(e.target.value)}}>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="date">Most recent</option>
        </select>
    </div>
  )
}

export default SortBy