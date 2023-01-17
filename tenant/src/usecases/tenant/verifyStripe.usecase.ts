const stripe = require("stripe")(
  "sk_test_51L7JjzSAUl4DYrh9Nwngsm9mXI6XXT7qarliWLKvfjxodbIBp3MvXLSQjk7kR6IYQMhBx4BfGCUx5lroBEgTn17A000Zq2ZvfR"
);

export const verifyStripe_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  const execute = async (session_id: any, companyName: string) => {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.status === "complete") {
      const customer = await stripe.customers.retrieve(session.customer);
      return tenantRepository.createPaidTenant(customer, companyName);
    }
  };

  return {
    execute,
  };
};
