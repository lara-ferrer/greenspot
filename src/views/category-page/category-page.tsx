import React, { Suspense } from "react";
import { CategoryHeader } from "./components/category-header/category-header";
import { CategoryGrid } from "./components/category-grid/category-grid";
import { Loading } from "../../components/atoms/loading-notice/loading-notice";
import { FilterBar } from "../../components/organisms/filter-bar/filter-bar";
import { Layout } from "../../components/templates/layout/layout";

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