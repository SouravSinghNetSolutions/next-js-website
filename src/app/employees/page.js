import React, { Suspense } from 'react';
import LazyComponent from '../../components/LazyComponent';

export default function EmployeesPage() {
  return (
    <main>
      <h1>Hello from Server Component</h1>
      <Suspense fallback={<div>Loading lazy component...</div>}>
        <LazyComponent />
      </Suspense>
    </main>
  );
}