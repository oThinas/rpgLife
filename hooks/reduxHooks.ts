/** Core */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

/** Redux */
import type { RootState, AppDispatch } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
