import React, { Suspense } from "react";
import { FilterBar } from "../../components/organisms";
import { Layout } from "../../components/templates";
import { Loading } from "../../components";
import { CategoryHeader } from "./components/category-header/category-header";
import { CategoryGrid } from "./components/category-grid/category-grid";

const CategoryPage = ({ title, name }) => {
  return (
    <Suspense fallback={ <Loading/> }>
      <CategoryHeader title={title} />
      <Layout numberOfColumns={2}>
        <FilterBar />
        <Suspense fallback={<Loading />}>
          <CategoryGrid categoryName={name} />
        </Suspense>
      </Layout>
    </Suspense>
  );
};

export default CategoryPage;