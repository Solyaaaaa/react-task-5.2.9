import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from '@mantine/core';
import { VacancyList } from './components/VacancyList/VacancyList';


const VacanciesPage = lazy(() => import('./pages/VacanciesPage'));
const VacancyPage = lazy(() => import('./pages/VacancyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


export default function App() {
  return (
    <Suspense fallback={<Loader color="blue" type="dots" />}>
    <Routes>
      <Route path="/" element={<Navigate to="/vacancies" />} />
      
      <Route path="/vacancies" element={<VacanciesPage />} >
        <Route index element={<Navigate to="moscow" replace />} />
        <Route path="moscow" element={<VacancyList/>}/>
        <Route path="petersburg" element={<VacancyList/>}/>
      </Route>

      <Route path="/vacancies/:id" element={<VacancyPage />} />
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
    </Suspense>

  );
}