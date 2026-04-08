export class BudgetExceededException extends Error {
  constructor(
    public readonly estimatedCost: number,
    public readonly maxBudget: number,
    public readonly originalError?: Error,
  ) {
    super(
      `Estimated cost R$ ${estimatedCost.toFixed(2)} exceeds maximum allowed R$ ${maxBudget.toFixed(2)}`,
    );
    this.name = 'BudgetExceededException';
  }
}
