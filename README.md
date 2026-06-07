# Event Management Portal

## Project Description

Event Management Portal is an Angular application that displays a list of events along with their date, ticket price, and category. The application demonstrates the use of Angular Components, Custom Pipes, Custom Directives, Data Binding, Structural Directives, and Component-specific Styling.

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Application

```bash
ng serve
```

### 3. Open in Browser

```text
http://localhost:4200
```

## Implemented Features

### Event List Component

* Displays event details in a tabular format.
* Uses Angular's `*ngFor` directive to render multiple events dynamically.

### Custom Pipe (PriceFormatPipe)

* Formats ticket prices into Indian currency format.
* Example:

  * 3500 → ₹3,500.00
  * 5000 → ₹5,000.00

### Custom Directive (HighlightDirective)

* Highlights premium events with ticket prices greater than ₹2000.
* Improves visibility of high-value events.

### Component-Specific Styling

* Table layout and formatting implemented using component CSS.
* Hover effects added for better user experience.

### Angular Features Used

* Components
* Custom Pipes
* Custom Directives
* Property Binding
* Structural Directives (`*ngFor`)
* Component-specific CSS Styling

## Author

Ashwin Raj
