# Simple Guide to Adding New Documents to Our Website

Adding new documents to our website is simple, even if you're not tech-savvy! Just follow these easy steps:

## Step 1: Finding the Right Place for Your Document

1. All our documents live in a folder called `src/app/docs`.
2. Inside this folder, you'll find other folders like `installation`. These are categories.
3. If your document fits into an existing category, you'll add it there.
4. If you need a new category, you'll create a new folder with a simple name (no spaces, use dashes instead).

## Step 2: Creating Your New Document

1. If adding to an existing category:
   - Go to that category's folder
   - Your document should be named `page.md`
   
2. If creating a new category:
   - First create a new folder with your category name (like `getting-started`)
   - Inside that new folder, create a file called `page.md`

## Step 3: Writing Your Document

Every document needs two parts:

### Part 1: The Document Information Header
At the top of your document, add these lines (replacing the example text with your own):

```
---
title: Your Document Title
nextjs:
  metadata:
    title: Your Document Title
    description: A brief description of what this document covers.
---
```

### Part 2: The Document Content
After the header, write your content using these simple rules:

- For regular paragraphs, just type normally
- For main headings, start the line with `##` (like `## Main Topic`)
- For sub-headings, start the line with `###` (like `### Subtopic`)
- For a divider line, use `---` on its own line
- For code examples, wrap them in three backticks:
  ```
  your code goes here
  ```

### Example of a Simple Document

```
---
title: Getting Started
nextjs:
  metadata:
    title: Getting Started
    description: Learn how to start using our product in minutes.
---

This guide will help you get started with our product quickly and easily.

---

## First Steps

Here's how to begin using our product right away.

### Download and Install

Simply download the installer from our website and run it on your computer.

### Setting Up Your Account

Follow these steps to set up your account:
1. Open the application
2. Click on "Create Account"
3. Fill in your information

---

## Tips and Tricks

Here are some helpful tips for new users.
```

## Step 4: Adding Your Document to the Navigation Menu

Unlike some websites, our navigation menu doesn't automatically update when you add new documents. You need to add your document to the menu manually by following these steps:

1. Find the file called `navigation.ts` in the `src/lib` folder
2. Open this file for editing
3. Look for a structure that looks like this:
   ```
   export const navigation = [
     {
       title: 'Introduction',
       links: [
         { title: 'Getting started', href: '/' },
         { title: 'Installation', href: '/docs/installation' },
       ],
     }
   ]
   ```

4. Now you have two options:
   
   a) To add your document to an existing section (like "Introduction"):
   - Find the section you want to add your document to
   - Add a new line inside the `links` array with your document information
   - For example, if you created a document in "src/app/docs/quickstart/page.md":
     ```
     { title: 'Quick Start Guide', href: '/docs/quickstart' },
     ```

   b) To create a new section:
   - Add a new object to the main `navigation` array
   - For example:
     ```
     {
       title: 'Advanced Guides',
       links: [
         { title: 'Your New Document', href: '/docs/your-folder-name' },
       ],
     }
     ```

5. Save the file

## Step 5: Saving Your Document

Once you've written your document and updated the navigation, save all files. The website will update to include your new document in the navigation menu.

That's it! You've successfully added a new document to our website and made it accessible through the navigation menu.