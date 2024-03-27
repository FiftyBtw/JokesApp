import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//@ts-ignore
import {AppStore, Dispatch} from "../redux/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => Dispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector