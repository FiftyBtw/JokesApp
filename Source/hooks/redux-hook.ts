import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppStore, AppDispatch } from "../redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
