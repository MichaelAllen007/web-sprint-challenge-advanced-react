# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
Stateful components is dependent on it's state object and can change it's own state. The component re-renders based on changes to it's state, and may pass down properties of it's state to child components as properties on a props object.
functional components simply accept data and display them in some form; that is they are mainly responsible for rendering UI
2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is called before the render method is executed.
componentWillUpdate is called right before the component renders and right after shouldComponentUpdate
3. Define stateful logic.
Stateful logic is any code that uses state, but in the case of hooks I would define it as a behavior created with the use of one or more hooks. It's like a perk that you're adding to a component.
4. What are the three step of creating a successful test? What is done in each phase?

 Planning, Test Configuration, and Validation.
