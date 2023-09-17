import React, { Suspense } from "react";
import { CategoryHeader, FilterBar } from "../components/organisms";
import { Layout } from "../components/templates";
import { CategoryGrid } from "../components/organisms/CategoryGrid/category-grid";
import { Loading } from "../components";

export const CategoryPage = () => {
  return (
    <>
      <CategoryHeader />
      <Layout numberOfColumns={2}>
        <FilterBar />
        <Suspense fallback={<Loading />}>
          <CategoryGrid />
        </Suspense>
      </Layout>
    </>
  );
};
