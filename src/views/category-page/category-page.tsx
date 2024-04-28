import React, { Suspense } from "react";
import { FilterBar } from "../../components/organisms";
import { Layout } from "../../components/templates";
import { CategoryGrid } from "../../components/organisms/category-grid/category-grid";
import { Loading } from "../../components";
import { CategoryHeader } from "./components/category-header/category-header";

const CategoryPage = () => {
  return (
    <Suspense fallback={ <Loading/> }>
      <CategoryHeader />
      <Layout numberOfColumns={2}>
        <FilterBar />
        <Suspense fallback={<Loading />}>
          <CategoryGrid />
        </Suspense>
      </Layout>
    </Suspense>
  );
};

export default CategoryPage;