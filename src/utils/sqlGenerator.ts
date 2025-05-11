
/**
 * Generates an SQL solution based on the question type
 * @param isOdd Whether the registration number is odd (determines question type)
 * @returns The SQL query solution as a string
 */
export const generateSqlSolution = (isOdd: boolean): string => {
  if (isOdd) {
    // Solution for Question 1
    return `SELECT c.customer_id, c.name, c.email
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date BETWEEN '2023-01-01' AND '2023-03-31'
GROUP BY c.customer_id
HAVING COUNT(o.order_id) >= 3;`;
  } else {
    // Solution for Question 2
    return `SELECT d.department_name, 
       ROUND(AVG(e.salary), 2) as avg_salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
GROUP BY d.department_name
HAVING AVG(e.salary) > (
  SELECT AVG(salary) FROM employees
)
ORDER BY avg_salary DESC;`;
  }
};
