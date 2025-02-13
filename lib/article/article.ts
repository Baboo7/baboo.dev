import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownExtension, rootFolder } from '@lib/common';
import { ArticleMetadata } from '@lib/article';

export const articlesFolder = 'articles';

/**
 * Returns an article by its slug
 * @param slug
 */
export const getArticleBySlug = (slug: string) => {
  try {
    const content = fs.readFileSync(
      path.join(process.cwd(), rootFolder, articlesFolder, `${slug}${markdownExtension}`),
      'utf8',
    );
    return matter(content);
  } catch (error) {
    return null;
  }
};

/**
 * Returns the metadata of an article
 * @param slug
 */
export const getArticleMetadata = (slug: string): ArticleMetadata | null => {
  try {
    const content = fs.readFileSync(
      path.join(process.cwd(), rootFolder, articlesFolder, `${slug}${markdownExtension}`),
      'utf8',
    );
    const matterResult = matter(content);

    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      updated: matterResult.data.updated,
      categories: matterResult.data.categories,
      slug,
      permalink: articlesFolder + '/' + slug,
    };
  } catch (e) {
    return null;
  }
};

/**
 * Returns an array of ArticleMetadata
 * @param limit
 */
export const getArticlesMetadata = (limit?: number): ArticleMetadata[] => {
  const files = fs.readdirSync(path.join(process.cwd(), rootFolder, articlesFolder));
  const markdownArticles = files.filter(file => file.endsWith(markdownExtension));

  return markdownArticles
    .map(fileName => {
      return getArticleMetadata(fileName.replace(markdownExtension, ''))!;
    })
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(...(limit ? [0, limit] : [0]));
};
