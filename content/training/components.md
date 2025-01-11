---
# A section created with the Portfolio widget.
# This section displays content from `content/project/`.
# See https://wowchemy.com/docs/widget/portfolio/
widget: portfolio

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 2

title: ''
subtitle: ''

content:
  # Page type to display. E.g. project.
  page_type: trainingcomponents

  filters:
    # Folders to display content from
    folders:
      - trainingcomponents
    # Only show content with these tags
    tags: []
    # Exclude content with these tags
    exclude_tags: []
    # Which Hugo page kinds to show (https://gohugo.io/templates/section-templates/#page-kinds)
    # kinds:
    #   - page
  # Field to sort by, such as Date or Title
  sort_by: 'Date'
  sort_ascending: false
  # Default portfolio filter button
  # 0 corresponds to the first button below and so on
  # For example, 0 will default to showing all content as the first button below shows content with *any* tag
  default_button_index: 0

  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove the toolbar, delete the entire `filter_button` block.
  filter_button:
    - name: All
      tag: '*'
    - name: Mentoring
      tag: Mentoring
    - name: Education
      tag: Education
    - name: Professional Experience
      tag: Professional
    - name: Community
      tag: Community

design:
  # See Page Builder docs for all section customization options.
  # Choose how many columns the section has. Valid values: '1' or '2'.
  columns: '1'
  # Choose a listing view
  view: masonry
  # For Showcase view, flip alternate rows?
  flip_alt_rows: false
---
