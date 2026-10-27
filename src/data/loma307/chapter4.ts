import { Question } from '../../types';

export const chapter4Questions: Question[] = [
  // =========================================================================
  // INTRODUCTION & LO 4A: Time Value of Money, Simple vs. Compound Interest,
  // Nominal vs. Effective Rates, and the Rule of 72 (Questions 1–20)
  // =========================================================================
  {
    id: 401,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "At Crestview Life Insurance Company, junior financial analyst Elena Vance is evaluating two cash settlement structures for a vendor contract: receiving $100,000 today or receiving $100,000 exactly three years from today. Even in a zero-inflation environment with zero default risk, Elena recommends taking the $100,000 today. Under the concept of the time value of money, what is the primary financial justification for her recommendation?",
    options: [
      "A sum of money received today can be invested immediately to earn interest, giving it a greater future value than the identical sum received at a later date.",
      "The nominal principal value of money automatically depreciates at a fixed statutory rate every calendar year it remains uncollected.",
      "Money received in the future is legally classified as a perpetuity rather than a principal sum, preventing it from earning compound interest.",
      "Future cash flows are subject to simple interest deductions by financial intermediaries before they can be deposited into an insurer's general account."
    ],
    answer: 0,
    explanation: "The time value of money states that a sum of money has both a present value and a future value: because money received today can be invested to earn interest over time, a sum received today is worth more than the exact same dollar amount received in the future."
  },
  {
    id: 402,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "Marcus Sterling deposits $25,000 into a specialized fixed-rate account to fund a future business obligation. At the end of Year 1, the $25,000 earns 5% interest ($1,250). In Year 2, the account calculates the 5% interest strictly on the original $25,000 deposit rather than on the $26,250 accumulated balance. In financial terminology, the original $25,000 sum is the ______, and the interest calculation method used by this account is ______.",
    options: [
      "present value factor; compound interest",
      "principal; simple interest",
      "annuity due; effective interest",
      "future value; nominal discounting"
    ],
    answer: 1,
    explanation: "Principal is the original sum of money that is lent or invested. Simple interest is interest calculated and earned strictly on the original principal sum for each period, without earning interest on previously accrued interest."
  },
  {
    id: 403,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "An institutional investor places $10,000 into an investment vehicle for 4 years at a stated annual interest rate of 6%, using simple interest. Assuming no withdrawals are made during the 4-year term, what is the total ending balance (principal plus total simple interest earned) at the end of Year 4?",
    options: [
      "$10,600.00",
      "$12,624.77",
      "$12,400.00",
      "$14,000.00"
    ],
    answer: 2,
    explanation: "Under simple interest, annual interest is strictly Principal × Rate = $10,000 × 0.06 = $600 per year. Over 4 years, total simple interest is 4 × $600 = $2,400. Adding the $10,000 original principal yields an ending balance of $12,400.00."
  },
  {
    id: 404,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "Why do financial analysts state that simple interest ignores the time value of money across multi-period investments?",
    options: [
      "Because simple interest requires the principal to be returned to the borrower at the end of the first compounding period.",
      "Because simple interest reduces the stated interest rate by half after every compounding period.",
      "Because simple interest can only be calculated when the stated interest rate is negative or zero.",
      "Because interest earned in early periods is not reinvested to earn additional interest in subsequent periods, treating early interest receipts as if they have no earning power over time."
    ],
    answer: 3,
    explanation: "Simple interest ignores the time value of money because interest earned at the end of Year 1 sits idle without earning any return in Years 2, 3, and beyond—violating the fundamental principle that money available earlier can be invested to earn additional returns."
  },
  {
    id: 405,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "Apex Life Insurance Company invests $1,000 in a corporate debt instrument paying 5% interest compounded annually for 3 years. How much MORE total interest does Apex Life earn over the 3-year period through annual compounding compared to an identical $1,000 investment paying 5% simple interest for 3 years?",
    options: [
      "$7.63",
      "$5.00",
      "$15.76",
      "$57.63"
    ],
    answer: 0,
    explanation: "At 5% simple interest for 3 years, $1,000 earns $50 × 3 = $150 (ending balance $1,150.00). At 5% compound interest for 3 years, $1,000 grows to $1,000 × (1.05)^3 = $1,157.625 (or $1,157.63), earning $157.63 in total interest. The difference is $157.63 - $150.00 = $7.63."
  },
  {
    id: 406,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "Consider the relationship between compounding periods, interest rates, and future value. If an insurer holds a fixed principal investment at a positive interest rate, which of the following changes will result in the GREATEST exponential increase in the investment's ending value?",
    options: [
      "Switching from compound interest to simple interest while keeping the term and rate constant",
      "Increasing both the compound interest rate and the number of compounding periods",
      "Decreasing the compounding frequency from monthly to annually while keeping the nominal rate constant",
      "Holding the principal in cash equivalents that pay 0% interest over a longer time horizon"
    ],
    answer: 1,
    explanation: "Because compound interest earns interest on both principal and previously accumulated interest, the ending balance increases exponentially as both the compound interest rate and the number of compounding periods increase."
  },
  {
    id: 407,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "In LOMA's convention for interest rate terminology, if a problem or financial contract states an interest rate of '8 percent' without specifying a time period (such as monthly or quarterly), how must an analyst interpret that rate?",
    options: [
      "As a cumulative 8 percent rate spread across the entire life of the contract",
      "As an 8 percent monthly rate that must be multiplied by 12 to find the annual rate",
      "As an annual (per year) interest rate of 8 percent",
      "As a semi-annual effective rate that applies only to simple interest loans"
    ],
    answer: 2,
    explanation: "By standard financial convention, unless stated otherwise, any quoted interest rate is assumed to be an annual rate (rate per year) and is assumed to be compounded rather than simple."
  },
  {
    id: 408,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "A commercial bank advertises a certificate of deposit with a stated annual interest rate of 6%, compounded quarterly. Due to quarterly compounding, the account actually yields 6.136% over a full year. Which of the following correctly pairs the 6% rate and the 6.136% rate with their formal financial definitions?",
    options: [
      "6% is the effective interest rate; 6.136% is the nominal interest rate.",
      "6% is the discount rate; 6.136% is the simple interest rate.",
      "6% is the real interest rate; 6.136% is the periodic quarterly rate.",
      "6% is the nominal interest rate; 6.136% is the effective interest rate."
    ],
    answer: 3,
    explanation: "The stated annual interest rate (6%) is the nominal interest rate. The actual rate of interest earned or paid on an annual basis after accounting for intra-year compounding frequency (6.136%) is the effective interest rate (also called the effective annual rate)."
  },
  {
    id: 409,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "Under which specific condition is an investment's effective annual interest rate exactly EQUAL to its nominal annual interest rate?",
    options: [
      "When interest is compounded exactly once per year (annually)",
      "When interest is compounded semiannually at a rate below 5%",
      "When interest is compounded monthly over a 1-year period",
      "When interest is compounded daily using a 360-day commercial year"
    ],
    answer: 0,
    explanation: "When interest is compounded only once per year (annual compounding), no intra-year compounding occurs, so the effective annual interest rate is identical to the nominal annual interest rate. Whenever compounding occurs more than once a year, the effective rate exceeds the nominal rate."
  },
  {
    id: 410,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "Beacon Life Insurance Company is evaluating a 3-year corporate note with a nominal annual interest rate of 8%, compounded quarterly. To compute the future value of this investment, what are the correct values for the total number of compounding periods (n) and the periodic interest rate (i) per quarter?",
    options: [
      "n = 3 periods; i = 8% per period",
      "n = 12 periods; i = 2% per period",
      "n = 4 periods; i = 2.67% per period",
      "n = 12 periods; i = 8% per period"
    ],
    answer: 1,
    explanation: "When interest is compounded m times per year over Y years, the total number of compounding periods is n = Y × m = 3 years × 4 quarters/year = 12 periods. The periodic interest rate is i = Nominal Annual Rate / m = 8% / 4 = 2% per quarter."
  },
  {
    id: 411,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "A treasury analyst deposits $1,000 into an account paying a nominal annual interest rate of 4%, compounded semiannually (twice a year) for 2 years. What is the exact balance in the account at the end of the 2-year period?",
    options: [
      "$1,080.00",
      "$1,081.60",
      "$1,082.43",
      "$1,169.86"
    ],
    answer: 2,
    explanation: "With a 4% nominal rate compounded semiannually for 2 years, there are n = 2 × 2 = 4 compounding periods, and the periodic rate is i = 4% / 2 = 2% (0.02) per half-year. FV = $1,000 × (1.02)^4 = $1,000 × 1.082432 = $1,082.43."
  },
  {
    id: 412,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "Suppose an institutional investor can choose among four bank accounts, each offering a nominal annual interest rate of 5% on a $50,000 deposit held for 5 years. The only difference among the four accounts is the compounding frequency. Which account will generate the HIGHEST effective annual interest rate and the LARGEST ending balance?",
    options: [
      "Account A, which compounds interest annually",
      "Account B, which compounds interest semiannually",
      "Account C, which compounds interest quarterly",
      "Account D, which compounds interest daily"
    ],
    answer: 3,
    explanation: "For any given nominal interest rate, the greater the number of compounding periods per year, the higher the effective interest rate and the greater the future value. Daily compounding (365 times per year) compounds more frequently than annual, semiannual, or quarterly compounding."
  },
  {
    id: 413,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "Portfolio manager David Kim is in a meeting without a financial calculator and wants to quickly estimate how many years it will take for a $500,000 fixed-income reserve fund to double in value to $1,000,000 at a compound annual interest rate of 6%. Using the Rule of 72, what is the approximate number of years required?",
    options: [
      "12 years",
      "8.33 years",
      "14.4 years",
      "6 years"
    ],
    answer: 0,
    explanation: "According to the Rule of 72, dividing 72 by the annual compound interest rate (expressed as a whole number) yields the approximate number of years required for a principal sum to double: Years = 72 / 6 = 12 years."
  },
  {
    id: 414,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "An endowment fund manager has $200,000 today and needs the fund to double to $400,000 in exactly 9 years without adding any new principal contributions. Applying the Rule of 72, what approximate annual compound interest rate must the fund earn to achieve this doubling goal?",
    options: [
      "6.5%",
      "8.0%",
      "9.0%",
      "12.5%"
    ],
    answer: 1,
    explanation: "A useful variation of the Rule of 72 estimates the compound annual interest rate needed to double a sum in a given number of years: Interest Rate = 72 / Years = 72 / 9 = 8.0%."
  },
  {
    id: 415,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "Which of the following statements accurately describes a limitation of the Rule of 72 when used in financial analysis?",
    options: [
      "It can only be applied when interest is calculated using simple interest rather than annual compound interest.",
      "It provides an exact, legally binding figure required for statutory reserve reporting on an insurer's Balance Sheet.",
      "It is a quick rule-of-thumb approximation assuming annual compounding and becomes less accurate at very high interest rates.",
      "It calculates the time required for an investment to triple rather than double in value."
    ],
    answer: 2,
    explanation: "The Rule of 72 is a shortcut estimation method (rule of thumb) assuming annual compounding. While reasonably accurate for moderate interest rates, it is not exact and loses precision at high interest rates."
  },
  {
    id: 416,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "A life insurer issues a single-premium deferred accumulation contract with a nominal annual rate of 12% compounded monthly. If an analyst needs to determine the periodic interest rate applied each month, how should that rate be calculated?",
    options: [
      "Multiply 12% by 12 months to get 144% per month",
      "Divide 72 by 12% to get 6% per month",
      "Take the square root of 12% to get 3.46% per month",
      "Divide the 12% nominal annual rate by 12 months to get 1% per month"
    ],
    answer: 3,
    explanation: "To find the periodic interest rate per compounding period, divide the nominal annual interest rate by the number of compounding periods per year: 12% / 12 months = 1% per month."
  },
  {
    id: 417,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "If $1,000 is invested at a nominal annual rate of 4% for 1 year, annual compounding yields $1,040.00 (4.00% effective rate) and semiannual compounding yields $1,040.40 (4.04% effective rate). What happens if the same $1,000 is compounded QUARTERLY at a 4% nominal annual rate for 1 year?",
    options: [
      "The periodic rate is 1% per quarter over 4 quarters, yielding $1,040.60 and an effective annual rate of 4.06%.",
      "The periodic rate is 2% per quarter over 2 quarters, yielding $1,040.40 and an effective annual rate of 4.04%.",
      "The periodic rate is 4% per quarter over 4 quarters, yielding $1,169.86 and an effective annual rate of 16.99%.",
      "The periodic rate is 0.25% per quarter over 4 quarters, yielding $1,010.04 and an effective annual rate of 1.00%."
    ],
    answer: 0,
    explanation: "With quarterly compounding at a 4% nominal annual rate for 1 year, the periodic rate is 4% / 4 = 1% per quarter over 4 quarters: $1,000 × (1.01)^4 = $1,040.60, which represents an effective annual interest rate of 4.06% ($40.60 / $1,000)."
  },
  {
    id: 418,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "When comparing two investment alternatives over a 10-year horizon, Investment X pays 7% simple interest annually and Investment Y pays 7% compound interest annually on the same $50,000 principal. In Year 1 alone, how does the interest earned on Investment X compare to the interest earned on Investment Y?",
    options: [
      "Investment X earns more interest in Year 1 because simple interest front-loads returns.",
      "Both investments earn the exact same amount of interest ($3,500) in Year 1 because no prior accumulated interest exists yet to be compounded.",
      "Investment Y earns more interest in Year 1 because annual compounding adds a bonus period at inception.",
      "Neither investment earns interest in Year 1 because compounding only begins in Year 2."
    ],
    answer: 1,
    explanation: "At the end of Period 1 (Year 1), simple interest and annual compound interest produce the exact same interest amount ($50,000 × 0.07 = $3,500) because compounding only diverges starting in Period 2 when Period 1's interest begins earning interest."
  },
  {
    id: 419,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "An analyst observes that a principal sum invested at an annual compound rate of 9% will double in approximately 8 years (72 / 9 = 8). If the same principal remains invested at 9% compounded annually for 16 years, what will happen to the original principal value based on this doubling relationship?",
    options: [
      "It will increase by 50% above the Year 8 balance.",
      "It will triple its original value.",
      "It will quadruple (double twice) its original value.",
      "It will remain at twice its original value because the Rule of 72 caps growth after one cycle."
    ],
    answer: 2,
    explanation: "If an investment doubles every 8 years at 9% compound interest, in the first 8 years it doubles (2× original principal), and in the second 8-year period (Years 9–16) that doubled balance doubles again to 4× (quadruple) the original principal."
  },
  {
    id: 420,
    lo: "4A: Explain the time value of money, differentiate between simple and compound interest and between nominal and effective interest rates, and use the Rule of 72 to calculate the time or interest rate required for a given sum to double in value.",
    question: "Which statement correctly contrasts the growth curve of an investment earning simple interest with the growth curve of an investment earning compound interest over a 30-year period?",
    options: [
      "Simple interest grows exponentially (curving upward), whereas compound interest grows linearly (a straight line).",
      "Both simple interest and compound interest grow linearly, but compound interest has a steeper straight-line slope.",
      "Simple interest grows logarithmically and plateaus at zero, whereas compound interest declines over time.",
      "Simple interest grows linearly by a constant dollar amount each period, whereas compound interest grows exponentially by an ever-increasing dollar amount each period."
    ],
    answer: 3,
    explanation: "Under simple interest, the dollar interest added each period is constant (linear growth). Under compound interest, interest is earned on an expanding base of principal plus prior interest, producing an upward-curving exponential growth trajectory."
  },

  // =========================================================================
  // LO 4B: Future Value of a Single Sum & Future Value of Ordinary Annuities
  // and Annuities Due (Questions 21–50)
  // =========================================================================
  {
    id: 421,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "In financial analysis, the process of calculating a future value (FV) from a known present value (PV) by applying an interest rate over one or more periods is formally known as:",
    options: [
      "Compounding",
      "Discounting",
      "Amortizing",
      "Annuitizing"
    ],
    answer: 0,
    explanation: "Compounding is the process of finding a future value from a present value by applying compound interest forward over time. Discounting is the reverse process (finding a present value from a future value)."
  },
  {
    id: 422,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Solstice Life Insurance Company invests a single sum of $250,000 today at an annual compound interest rate of 6% for 10 years. Using the algebraic formula for the future value of a single sum, which expression correctly calculates the future value (FV) at the end of 10 years?",
    options: [
      "FV = $250,000 / (1 + 0.06)^10",
      "FV = $250,000 × (1 + 0.06)^10",
      "FV = $250,000 × (0.06 × 10)",
      "FV = $250,000 × [(1 + 0.06)^10 - 1]"
    ],
    answer: 1,
    explanation: "The formula for the future value of a single sum over n periods at periodic interest rate i is FV = PV × (1 + i)^n. Substituting PV = $250,000, i = 0.06, and n = 10 gives FV = $250,000 × (1 + 0.06)^10."
  },
  {
    id: 423,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "In the future value formula FV = PV × (1 + i)^n, what is the specific name of the term (1 + i)^n, which represents the future value of $1.00 invested at interest rate i for n periods?",
    options: [
      "Present Value Interest Factor (PVIF)",
      "Future Value Interest Factor for an Annuity (FVIFA)",
      "Future Value Interest Factor (FVIF)",
      "Internal Rate of Return Factor (IRRF)"
    ],
    answer: 2,
    explanation: "The expression (1 + i)^n is the Future Value Interest Factor (FVIF)—the future value of $1.00 at interest rate i for n periods. Multiplying any present value (PV) by the appropriate FVIF yields the future value."
  },
  {
    id: 424,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An analyst looks up an FVIF table and finds that for i = 5% and n = 5 periods, the Future Value Interest Factor is 1.276. If a client invests a single lump sum of $40,000 at 5% compounded annually for 5 years, what is the future value of this investment?",
    options: [
      "$31,347.96",
      "$42,000.00",
      "$50,000.00",
      "$51,040.00"
    ],
    answer: 3,
    explanation: "Using the FVIF table approach, FV = PV × FVIF(5%, 5) = $40,000 × 1.276 = $51,040.00."
  },
  {
    id: 425,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Which of the following mathematical properties is ALWAYS true for any Future Value Interest Factor (FVIF) in a standard FVIF table where the interest rate (i) is greater than zero and the number of periods (n) is at least 1?",
    options: [
      "Every FVIF value in the table is greater than 1.000.",
      "Every FVIF value in the table is less than 1.000.",
      "Every FVIF value in the table decreases as you move down a column to a higher number of periods.",
      "Every FVIF value in the table decreases as you move across a row to a higher interest rate."
    ],
    answer: 0,
    explanation: "Because $1.00 invested at any positive interest rate (i > 0) for at least one period (n >= 1) grows to more than $1.00, every FVIF value (1 + i)^n in an FVIF table is strictly greater than 1.000, and increases as either i or n increases."
  },
  {
    id: 426,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "How is an 'annuity' defined as a general financial concept in time-value-of-money calculations (as distinct from an insurance company annuity contract)?",
    options: [
      "Any single lump-sum payment made at the end of a multi-year loan agreement",
      "A series of equal periodic payments for which the payment amount, number of payments, and time between payments are all fixed and known",
      "A stream of irregular cash deposits that vary monthly according to equity market returns",
      "A life insurance death benefit paid in a single check upon proof of the insured's death"
    ],
    answer: 1,
    explanation: "In financial mathematics, an annuity is any series of equal periodic payments at regular intervals (monthly, quarterly, annually) where the payment amount and the number of periods are fixed."
  },
  {
    id: 427,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "What is the fundamental distinction between an 'ordinary annuity' and an 'annuity due'?",
    options: [
      "An ordinary annuity pays compound interest, whereas an annuity due pays only simple interest.",
      "An ordinary annuity has variable payment amounts, whereas an annuity due has fixed payment amounts.",
      "An ordinary annuity makes periodic payments at the END of each period, whereas an annuity due makes periodic payments at the BEGINNING of each period.",
      "An ordinary annuity lasts forever, whereas an annuity due terminates after exactly 10 years."
    ],
    answer: 2,
    explanation: "The timing of each periodic payment within the period distinguishes the two: an ordinary annuity has payments occurring at the END of each period, while an annuity due has payments occurring at the BEGINNING of each period."
  },
  {
    id: 428,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Examine two 5-year savings plans that both require five annual deposits of $2,000 and both earn 6% compounded annually. Plan X is structured as an ordinary annuity (deposits at the end of each year), while Plan Y is structured as an annuity due (deposits at the beginning of each year). When the future value of both plans is calculated at the end of Year 5, how many compounding periods of interest does the VERY LAST (5th) payment earn in Plan X versus Plan Y?",
    options: [
      "Plan X's last payment earns 1 period of interest; Plan Y's last payment earns 0 periods of interest.",
      "Both Plan X's and Plan Y's last payments earn 5 full periods of interest.",
      "Plan X's last payment earns 4 periods of interest; Plan Y's last payment earns 5 periods of interest.",
      "Plan X's last payment earns 0 periods of interest; Plan Y's last payment earns 1 full period of interest."
    ],
    answer: 3,
    explanation: "In an ordinary annuity (Plan X), the 5th payment is deposited on the very last day of Year 5, so it has zero time to earn interest before the end of Year 5 (it earns 0 periods of interest). In an annuity due (Plan Y), the 5th payment is deposited at the beginning of Year 5, so it earns 1 full period of interest by the end of Year 5."
  },
  {
    id: 429,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "A policyholder deposits $1,000 at the END of each year for 3 years into a side fund earning 5% annual compound interest. How is the total future value of this 3-year ordinary annuity calculated at the end of Year 3 by summing the individual payments?",
    options: [
      "Payment 1 earns 2 years of interest ($1,102.50) + Payment 2 earns 1 year of interest ($1,050.00) + Payment 3 earns 0 years of interest ($1,000.00) = $3,152.50",
      "Payment 1 earns 3 years of interest ($1,157.63) + Payment 2 earns 2 years of interest ($1,102.50) + Payment 3 earns 1 year of interest ($1,050.00) = $3,310.13",
      "All three payments earn 3 years of interest: 3 × $1,157.63 = $3,472.89",
      "All three payments earn simple interest only: $3,000 + $150 = $3,150.00"
    ],
    answer: 0,
    explanation: "Because payments in an ordinary annuity occur at the END of each year: Payment 1 (made at end of Year 1) compounds for 2 years ($1,000 × 1.05^2 = $1,102.50); Payment 2 (end of Year 2) compounds for 1 year ($1,000 × 1.05^1 = $1,050.00); Payment 3 (end of Year 3) compounds for 0 years ($1,000.00). The sum is $3,152.50."
  },
  {
    id: 430,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Now suppose the same policyholder deposits $1,000 at the BEGINNING of each year for 3 years (an annuity due) into the account earning 5% annual compound interest. What is the future value of this annuity due at the end of Year 3?",
    options: [
      "$3,152.50",
      "$3,310.13",
      "$3,000.00",
      "$3,472.89"
    ],
    answer: 1,
    explanation: "In a 3-year annuity due, each payment is made one year earlier than in an ordinary annuity: Payment 1 (beginning of Year 1) compounds for 3 years ($1,157.63); Payment 2 (beginning of Year 2) compounds for 2 years ($1,102.50); Payment 3 (beginning of Year 3) compounds for 1 year ($1,050.00). Total FV = $3,310.13 (which is also $3,152.50 × 1.05)."
  },
  {
    id: 431,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An analyst is using a Future Value Interest Factor for an Annuity (FVIFA) table. By financial convention, standard published FVIFA tables list factors strictly for which type of cash flow stream?",
    options: [
      "Annuities due (payments at the beginning of each period)",
      "Single lump-sum deposits made at inception",
      "Ordinary annuities (payments at the end of each period)",
      "Perpetuities with declining periodic payments"
    ],
    answer: 2,
    explanation: "Standard FVIFA (and PVIFA) tables are constructed for ordinary annuities (where payments occur at the end of each period). To find the factor for an annuity due, analysts adjust the ordinary annuity table factor."
  },
  {
    id: 432,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "For an ordinary annuity of n periods at periodic interest rate i, how does the Future Value Interest Factor for an Annuity (FVIFA) relate mathematically to the individual single-sum Future Value Interest Factors (FVIF)?",
    options: [
      "FVIFA(i, n) is the sum of the FVIFs for periods 1 through n.",
      "FVIFA(i, n) is the product of multiplying FVIF(i, n) by n.",
      "FVIFA(i, n) is equal to FVIF(i, n) divided by the interest rate i.",
      "FVIFA(i, n) is equal to 1.000 (for the final payment that earns 0 periods of interest) plus the sum of the FVIFs for periods 1 through (n - 1)."
    ],
    answer: 3,
    explanation: "Because the last payment of an n-period ordinary annuity earns zero interest (factor = 1.000) and the first payment earns (n - 1) periods of interest, FVIFA(i, n) = 1 + FVIF(i, 1) + FVIF(i, 2) + ... + FVIF(i, n - 1)."
  },
  {
    id: 433,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "In an FVIFA table for an ordinary annuity, what is the FVIFA value across ALL interest rates (whether 1%, 5%, or 15%) when the number of periods is n = 1?",
    options: [
      "Exactly 1.000",
      "1 + i",
      "0.000",
      "1 / (1 + i)"
    ],
    answer: 0,
    explanation: "For an ordinary annuity with n = 1 period, the single payment is made at the very END of Period 1. Because it is deposited at the end of the period, it earns zero interest during Period 1, so its future value at the end of Period 1 is simply 1.000 times the payment across all interest rates."
  },
  {
    id: 434,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Horizon Insurance Company collects an annual premium of $5,000 at the BEGINNING of each year for 10 years on an accumulation contract that credits 4% interest compounded annually. An analyst looks up the standard ordinary annuity FVIFA table for i = 4%: for n = 10, FVIFA = 12.006; for n = 11, FVIFA = 13.486. Using the LOMA table-adjustment method for the FVIFA of an annuity due, what is the correct FVIFA for this 10-year annuity due, and what is the contract's future value at the end of Year 10?",
    options: [
      "FVIFA = 12.006; Future Value = $60,030",
      "FVIFA = 12.486 (calculated as 13.486 - 1.000); Future Value = $62,430",
      "FVIFA = 13.486; Future Value = $67,430",
      "FVIFA = 11.006 (calculated as 12.006 - 1.000); Future Value = $55,030"
    ],
    answer: 1,
    explanation: "To find the FVIFA for an n-period annuity due using an ordinary annuity FVIFA table: look up the FVIFA for (n + 1) periods at interest rate i, and subtract 1.000. Here, for n = 10 at 4%, take FVIFA(4%, 11) - 1 = 13.486 - 1.000 = 12.486. (Equivalently, 12.006 × 1.04 = 12.48624). Multiplying $5,000 × 12.486 yields $62,430."
  },
  {
    id: 435,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Why do we subtract 1.000 from the (n + 1)-period ordinary annuity FVIFA when calculating the FVIFA for an n-period annuity due?",
    options: [
      "Because an annuity due forfeits the first periodic payment as an administrative sales load.",
      "Because the interest rate on an annuity due is always 1% lower than on an ordinary annuity.",
      "Because an (n + 1)-period ordinary annuity includes a payment at the very end of the final period (worth 1.000) that does NOT take place in an n-period annuity due.",
      "Because the first payment of an annuity due does not earn compound interest."
    ],
    answer: 2,
    explanation: "An n-period annuity due has payments at the start of periods 1 through n, earning interest for n down to 1 periods. An (n + 1)-period ordinary annuity has payments earning interest for n down to 1 periods PLUS one extra payment at the very end earning 0 periods of interest (factor = 1.000). Subtracting 1.000 removes that extra end-of-period payment."
  },
  {
    id: 436,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An investor contributes $3,000 at the end of every year for 8 years into a retirement fund that earns 7% compounded annually. Given that the ordinary annuity FVIFA for i = 7% and n = 8 is 10.260, what is the total future value of the retirement fund at the end of Year 8, and how much of that total represents compound interest earned?",
    options: [
      "Future Value = $30,780; Total Interest Earned = $24,000",
      "Future Value = $24,000; Total Interest Earned = $6,780",
      "Future Value = $32,935; Total Interest Earned = $8,935",
      "Future Value = $30,780; Total Interest Earned = $6,780"
    ],
    answer: 3,
    explanation: "The Future Value of the ordinary annuity is $3,000 × 10.260 = $30,780. Since the investor contributed 8 payments of $3,000 ($24,000 in total principal payments), the compound interest earned is $30,780 - $24,000 = $6,780."
  },
  {
    id: 437,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "In the world of life insurance and retirement products, which of the following transactions is typically structured as an ANNUITY DUE rather than an ordinary annuity?",
    options: [
      "A policyowner paying annual life insurance premiums, where the first premium is required at policy inception (the beginning of the policy year)",
      "A corporate bond issuer paying semiannual coupon interest at the end of each six-month period",
      "A borrower making their first monthly mortgage payment 30 days after closing the loan",
      "An insurer crediting annual dividend payments at the end of each policy anniversary year"
    ],
    answer: 0,
    explanation: "Insurance premiums and annuity accumulation contributions are typically structured as annuities due because the insurer requires the first periodic payment immediately at the beginning of the first period before coverage takes effect."
  },
  {
    id: 438,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Assume the interest rate is positive (i > 0), the periodic payment amount is identical, and the number of periods (n) is identical. Which of the following relationships between the Future Value of an Annuity Due and the Future Value of an Ordinary Annuity is ALWAYS true?",
    options: [
      "FV of an Ordinary Annuity > FV of an Annuity Due",
      "FV of an Annuity Due > FV of an Ordinary Annuity",
      "FV of an Annuity Due = FV of an Ordinary Annuity",
      "FV of an Annuity Due < Total Principal Paid"
    ],
    answer: 1,
    explanation: "For any given payment amount, positive interest rate, and number of periods, the Future Value of an annuity due is ALWAYS greater than the Future Value of an ordinary annuity because every single payment in an annuity due is invested one period earlier and therefore earns one additional period of compound interest."
  },
  {
    id: 439,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An analyst already knows that the Future Value of a 15-year ordinary annuity of $4,000 per year at 5% annual compound interest is $86,314.25. Without consulting any interest factor tables, how can the analyst directly compute the Future Value of an otherwise identical 15-year ANNUITY DUE of $4,000 per year at 5%?",
    options: [
      "Divide $86,314.25 by 1.05",
      "Subtract $4,000 from $86,314.25",
      "Multiply $86,314.25 by (1 + 0.05) = $90,629.96",
      "Add 15 × $200 to $86,314.25"
    ],
    answer: 2,
    explanation: "Because every payment in an annuity due earns exactly one more period of compound interest (at rate i) than in an ordinary annuity, FV(Annuity Due) = FV(Ordinary Annuity) × (1 + i). Thus, $86,314.25 × 1.05 = $90,629.96."
  },
  {
    id: 440,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Suppose a client makes quarterly deposits of $500 at the end of each quarter for 5 years into an investment account paying a nominal annual rate of 8%, compounded quarterly. To find the future value of this ordinary annuity using an FVIFA table, which row (n) and column (i) must the analyst select?",
    options: [
      "n = 5 periods; i = 8%",
      "n = 5 periods; i = 2%",
      "n = 20 periods; i = 8%",
      "n = 20 periods; i = 2%"
    ],
    answer: 3,
    explanation: "When periodic payments and compounding occur quarterly over 5 years, there are n = 5 years × 4 quarters/year = 20 periods, and the periodic interest rate per quarter is i = 8% / 4 = 2%."
  },
  {
    id: 441,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "If an insurer's investment portfolio earns a higher compound interest rate than originally projected while the principal and time horizon remain unchanged, what is the effect on the Future Value Interest Factor (FVIF) and the Future Value (FV)?",
    options: [
      "Both the FVIF and the FV increase.",
      "The FVIF increases, but the FV decreases.",
      "Both the FVIF and the FV decrease.",
      "The FVIF remains constant at 1.000, while the FV increases linearly."
    ],
    answer: 0,
    explanation: "According to the core rules of time value of money, for any positive principal and time period, as the interest rate increases, the Future Value Interest Factor (1 + i)^n increases, and therefore the Future Value increases."
  },
  {
    id: 442,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Given the single-sum FVIF values at 6%: FVIF(6%, 1) = 1.060, FVIF(6%, 2) = 1.124, FVIF(6%, 3) = 1.191, and FVIF(6%, 4) = 1.262. What is the exact FVIFA for a 4-period ordinary annuity at 6%?",
    options: [
      "4.637",
      "4.375",
      "5.637",
      "3.375"
    ],
    answer: 1,
    explanation: "For a 4-period ordinary annuity at 6%, FVIFA(6%, 4) = 1.000 + FVIF(6%, 1) + FVIF(6%, 2) + FVIF(6%, 3) = 1.000 + 1.060 + 1.124 + 1.191 = 4.375."
  },
  {
    id: 443,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Using the same single-sum FVIF values at 6% from the previous question—FVIF(6%, 1) = 1.060, FVIF(6%, 2) = 1.124, FVIF(6%, 3) = 1.191, and FVIF(6%, 4) = 1.262—what is the FVIFA for a 4-period ANNUITY DUE at 6%?",
    options: [
      "4.375",
      "3.637",
      "4.637",
      "5.637"
    ],
    answer: 2,
    explanation: "In a 4-period annuity due, payments occur at the beginning of periods 1, 2, 3, and 4, so they earn interest for 4, 3, 2, and 1 periods respectively: FVIFA(Annuity Due, 6%, 4) = FVIF(6%, 1) + FVIF(6%, 2) + FVIF(6%, 3) + FVIF(6%, 4) = 1.060 + 1.124 + 1.191 + 1.262 = 4.637."
  },
  {
    id: 444,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Rachel deposits a single sum of $15,000 into an account earning 5% compounded annually. After 3 years, she makes no further deposits or withdrawals, and the account continues earning 5% compounded annually for an additional 4 years (7 years total). Given FVIF(5%, 3) = 1.158 and FVIF(5%, 7) = 1.407, what is the balance at the end of Year 7?",
    options: [
      "$17,370.00",
      "$19,237.50",
      "$38,475.00",
      "$21,105.00"
    ],
    answer: 3,
    explanation: "Because no withdrawals or changes occur, the $15,000 single sum simply compounds for the entire 7-year period at 5%: FV = $15,000 × FVIF(5%, 7) = $15,000 × 1.407 = $21,105.00."
  },
  {
    id: 445,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An insurer sells a 5-year guaranteed investment contract (GIC) in which the institutional client deposits $100,000 on Day 1. The insurer guarantees an annual compound rate of 4.5%. Which type of time-value-of-money calculation must the insurer perform to determine the exact maturity payout owed to the client at the end of Year 5?",
    options: [
      "Future value of a single sum",
      "Future value of an ordinary annuity",
      "Present value of an annuity due",
      "Present value of a single sum"
    ],
    answer: 0,
    explanation: "Because a single lump-sum deposit ($100,000) is invested today and grows at a compound rate to a single maturity payout at the end of Year 5, this is a classic Future Value of a Single Sum calculation."
  },
  {
    id: 446,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Two twin brothers, Leo and Max, both open retirement accounts earning 6% compounded annually. For 10 years, Leo deposits $5,000 on January 1 of each year (beginning of the year), while Max deposits $5,000 on December 31 of each year (end of the year). At the end of Year 10, whose account has a larger balance and why?",
    options: [
      "Max's account is larger because December 31 deposits lock in year-end dividend adjustments.",
      "Leo's account is larger because his deposits form an annuity due, meaning every $5,000 payment earns one extra year of 6% compound interest compared to Max's ordinary annuity.",
      "Both accounts have the exact same balance because both brothers deposited $50,000 over 10 years at 6%.",
      "Max's account is larger because ordinary annuities have higher FVIFA factors than annuities due."
    ],
    answer: 1,
    explanation: "Leo's January 1 deposits form an annuity due, whereas Max's December 31 deposits form an ordinary annuity. Each of Leo's 10 deposits is invested a full year earlier than Max's corresponding deposit, earning an extra 6% compound return."
  },
  {
    id: 447,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "A financial analyst is calculating the future value of a 6-year annuity due of $2,500 per year at 8% interest. On a timeline marked from Time 0 (beginning of Year 1) to Time 6 (end of Year 6), at which specific points on the timeline do the six $2,500 payments occur?",
    options: [
      "At Time 1, Time 2, Time 3, Time 4, Time 5, and Time 6",
      "All six payments occur simultaneously at Time 0",
      "At Time 0, Time 1, Time 2, Time 3, Time 4, and Time 5",
      "At Time 2, Time 3, Time 4, Time 5, Time 6, and Time 7"
    ],
    answer: 2,
    explanation: "On a standard financial timeline, Time 0 is the beginning of Period 1, Time 1 is the end of Period 1 / beginning of Period 2, and Time 5 is the beginning of Period 6. Thus, a 6-period annuity due has payments at Time 0, 1, 2, 3, 4, and 5, and its future value is measured at Time 6 (the end of Period 6)."
  },
  {
    id: 448,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "On a standard financial timeline marked from Time 0 to Time 6, at which specific points do the six periodic payments of a 6-year ORDINARY ANNUITY occur?",
    options: [
      "At Time 0, Time 1, Time 2, Time 3, Time 4, and Time 5",
      "At Time 0, Time 2, Time 4, Time 6, Time 8, and Time 10",
      "All six payments occur at Time 6",
      "At Time 1, Time 2, Time 3, Time 4, Time 5, and Time 6"
    ],
    answer: 3,
    explanation: "In a 6-period ordinary annuity, payments occur at the END of each period: Time 1 (end of Period 1), Time 2, Time 3, Time 4, Time 5, and Time 6 (end of Period 6)."
  },
  {
    id: 449,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "What happens to the Future Value of an annuity (either ordinary or due) if the number of payment periods (n) increases from 10 years to 20 years while the periodic payment amount and positive interest rate remain constant?",
    options: [
      "The Future Value more than doubles because there are twice as many payments AND the earlier payments compound for an additional 10 years.",
      "The Future Value increases by less than 50% due to diminishing returns of compounding.",
      "The Future Value exactly doubles because 20 years is twice as long as 10 years.",
      "The Future Value decreases because inflation erodes long-term annuity factors."
    ],
    answer: 0,
    explanation: "Doubling the number of periods in a compounding annuity more than doubles the Future Value: not only are twice as many principal payments contributed, but all of the first 10 years' payments and accumulated interest continue compounding for an additional 10 years."
  },
  {
    id: 450,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An individual deposits $1,200 at the beginning of each year into a flexible-premium deferred annuity contract that guarantees 3% annual compound interest. Using an ordinary annuity FVIFA table where FVIFA(3%, 5) = 5.309 and FVIFA(3%, 6) = 6.468, what is the accumulated value of this annuity due at the end of Year 5?",
    options: [
      "$6,370.80",
      "$6,561.60",
      "$7,761.60",
      "$6,000.00"
    ],
    answer: 1,
    explanation: "Because payments are made at the beginning of each year, this is a 5-year annuity due. Using the table rule, FVIFA(Annuity Due, 3%, 5) = FVIFA(Ordinary, 3%, 6) - 1.000 = 6.468 - 1.000 = 5.468. Multiplying $1,200 × 5.468 = $6,561.60."
  },

  // =========================================================================
  // LO 4C: Present Value of a Single Sum, Present Value of Ordinary Annuities
  // and Annuities Due, and Fair Value Valuation (Questions 51–85)
  // =========================================================================
  {
    id: 451,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "In financial analysis, what is the formal term for the process of finding the present value (PV) of a known future sum of money or stream of cash flows by working backward in time?",
    options: [
      "Compounding",
      "Syndicating",
      "Discounting",
      "Capitalizing"
    ],
    answer: 2,
    explanation: "Discounting is the process of finding a present value from a future value—the exact mathematical opposite of compounding. The interest rate used in discounting is often called the discount rate."
  },
  {
    id: 452,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Vanguard Life Insurance Company knows it must pay a guaranteed maturity benefit of $500,000 in exactly 8 years. If the insurer's investment portfolio earns an annual compound return of 5%, which algebraic formula determines the exact present value (PV) the insurer must invest today to grow to $500,000 in 8 years?",
    options: [
      "PV = $500,000 × (1 + 0.05)^8",
      "PV = $500,000 × (1 - 0.05)^8",
      "PV = $500,000 / (0.05 × 8)",
      "PV = $500,000 × [1 / (1 + 0.05)^8]"
    ],
    answer: 3,
    explanation: "Since FV = PV × (1 + i)^n, solving for PV gives PV = FV / (1 + i)^n, which is equivalently written as PV = FV × [1 / (1 + i)^n]. Substituting FV = $500,000, i = 0.05, and n = 8 gives PV = $500,000 × [1 / (1 + 0.05)^8]."
  },
  {
    id: 453,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "In the present value formula PV = FV × [1 / (1 + i)^n], the expression [1 / (1 + i)^n] is called the Present Value Interest Factor (PVIF). How is the PVIF mathematically related to the Future Value Interest Factor (FVIF) for the same interest rate i and number of periods n?",
    options: [
      "The PVIF is the exact reciprocal of the FVIF (that is, PVIF = 1 / FVIF).",
      "The PVIF is equal to the FVIF minus 1.000.",
      "The PVIF is equal to 1.000 minus the FVIF.",
      "The PVIF is equal to the square root of the FVIF."
    ],
    answer: 0,
    explanation: "Because FVIF = (1 + i)^n and PVIF = 1 / (1 + i)^n, the Present Value Interest Factor (PVIF) is the mathematical reciprocal of the Future Value Interest Factor (FVIF)."
  },
  {
    id: 454,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Which of the following statements is ALWAYS true for every Present Value Interest Factor (PVIF) in a standard PVIF table where the interest rate (i) is greater than zero and the number of periods (n) is at least 1?",
    options: [
      "Every PVIF value in the table is greater than 1.000.",
      "Every PVIF value in the table is less than 1.000, and decreases as either i or n increases.",
      "Every PVIF value in the table increases as you move down a column to a larger number of periods.",
      "Every PVIF value in the table increases as you move across a row to a higher interest rate."
    ],
    answer: 1,
    explanation: "Because money in the future is worth less than the same dollar amount today when i > 0, the present value of $1.00 to be received in the future is always less than $1.00 (PVIF < 1.000). Furthermore, the higher the discount rate i or the longer the waiting period n, the smaller the PVIF."
  },
  {
    id: 455,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An insurer faces a legal settlement requiring a single payment of $80,000 in 6 years. Looking at a PVIF table, the analyst sees that PVIF(4%, 6) = 0.790 and PVIF(6%, 6) = 0.705. If the insurer's investments earn 6% compounded annually rather than 4%, how much LESS money does the insurer need to set aside today to fund this $80,000 future obligation?",
    options: [
      "$56,400",
      "$63,200",
      "$6,800",
      "$9,600"
    ],
    answer: 2,
    explanation: "At 4%, PV = $80,000 × 0.790 = $63,200. At 6%, PV = $80,000 × 0.705 = $56,400. Because the insurer earns a higher compound return (6% vs. 4%), it needs to set aside $63,200 - $56,400 = $6,800 less today."
  },
  {
    id: 456,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Suppose an individual wants to accumulate $100,000 in 10 years. Compare Scenario A (the account earns 3% interest) with Scenario B (the account earns 8% interest). How does the higher interest rate in Scenario B affect the present value (PV) required today?",
    options: [
      "Scenario B requires a larger present value deposit today because higher interest rates accelerate discounting losses.",
      "Both scenarios require the exact same present value deposit today because the $100,000 target and 10-year horizon are identical.",
      "Scenario B requires a present value deposit equal to $100,000.",
      "Scenario B requires a smaller present value deposit today because each dollar invested today works harder and compounds faster at 8% than at 3%."
    ],
    answer: 3,
    explanation: "For a fixed future value target and a fixed time period, the present value (PV) decreases as the interest/discount rate (i) increases. At a higher interest rate, a smaller initial sum is needed today to grow to the desired future target."
  },
  {
    id: 457,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Now suppose an individual wants to accumulate $100,000 at a fixed 5% annual compound interest rate. Compare Plan 1 (investing a single sum today for 5 years) with Plan 2 (investing a single sum today for 20 years). Which plan requires a SMALLER present value deposit today, and why?",
    options: [
      "Plan 2 (20 years), because a longer compounding horizon gives the initial deposit 15 additional years to earn compound interest toward the $100,000 goal.",
      "Plan 1 (5 years), because shorter time horizons have smaller PVIF factors.",
      "Plan 1 (5 years), because discounting over fewer periods shrinks the present value.",
      "Both plans require the same initial deposit because the interest rate is fixed at 5%."
    ],
    answer: 0,
    explanation: "For a fixed future value target and a fixed positive interest rate, the present value (PV) decreases as the number of periods (n) increases. Giving the money 20 years to compound instead of 5 years means a much smaller deposit is required today."
  },
  {
    id: 458,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "When an insurance company calculates the single lump sum of money it must hold in reserve today in order to make a series of equal periodic annuity benefit payments to a retiree over the next 20 years, while the remaining reserve balance continues to earn interest, which time-value-of-money concept is the insurer applying?",
    options: [
      "Future value of an annuity",
      "Present value of an annuity",
      "Future value of a single sum",
      "Simple interest accumulation"
    ],
    answer: 1,
    explanation: "Finding the single lump-sum amount required today to fund a series of equal periodic withdrawals/payouts in the future (assuming the remaining fund balance earns compound interest until exhausted by the final payout) is calculating the Present Value of an Annuity."
  },
  {
    id: 459,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Consider a 3-year ordinary annuity that pays $1,000 at the END of each year for 3 years, discounted at an annual compound rate of 5%. Given single-sum PVIF values at 5%: PVIF(5%, 1) = 0.952, PVIF(5%, 2) = 0.907, and PVIF(5%, 3) = 0.864. What is the Present Value Interest Factor for an Annuity (PVIFA) for this 3-year ordinary annuity, and what is the present value of the annuity?",
    options: [
      "PVIFA = 3.000; Present Value = $3,000.00",
      "PVIFA = 2.859; Present Value = $2,859.00",
      "PVIFA = 2.723; Present Value = $2,723.00",
      "PVIFA = 2.592; Present Value = $2,592.00"
    ],
    answer: 2,
    explanation: "For an n-period ordinary annuity, the first payment occurs at the end of Period 1 (discounted 1 period), the second at the end of Period 2 (discounted 2 periods), and the nth at the end of Period n (discounted n periods). Thus, PVIFA(5%, 3) = PVIF(5%, 1) + PVIF(5%, 2) + PVIF(5%, 3) = 0.952 + 0.907 + 0.864 = 2.723. Multiplying $1,000 × 2.723 = $2,723.00."
  },
  {
    id: 460,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Verify how the $2,723.00 present value of the 3-year, 5% ordinary annuity of $1,000/year works in practice: If an insurer puts $2,723.00 into an account earning 5% interest today, what happens over the 3 years as the insurer pays out $1,000 at the end of each year?",
    options: [
      "The account runs out of money during Year 2 because $2,723 is less than $3,000.",
      "The account grows to $3,152.50 at the end of Year 3 because no withdrawals are deducted.",
      "The account has $277.00 left over at the end of Year 3.",
      "In Year 1, $2,723 grows by 5% to $2,859 before the first $1,000 payout leaves $1,859; in Year 2, $1,859 grows by 5% to $1,952 before the second $1,000 payout leaves $952; in Year 3, $952 grows by 5% to $1,000, which exactly pays the final $1,000 payout and brings the balance to $0."
    ],
    answer: 3,
    explanation: "The Present Value of an Annuity ($2,723) is the exact amount needed today so that, together with the 5% compound interest earned on the declining balance each year ($136 in Year 1 + $93 in Year 2 + $48 in Year 3 = $277 total interest), the fund can make all three $1,000 payouts and reach an ending balance of exactly $0 after the final payout."
  },
  {
    id: 461,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Now consider a 3-year ANNUITY DUE that pays $1,000 at the BEGINNING of each year for 3 years, discounted at 5% compounded annually. On the day the annuity begins (Time 0), how many periods of discounting apply to the VERY FIRST $1,000 payment?",
    options: [
      "Zero periods—because the first payment of an annuity due occurs immediately today (at Time 0), its present value is simply 1.000 times the payment ($1,000).",
      "One full period—its present value is $1,000 × 0.952 = $952.",
      "Three full periods—its present value is $1,000 × 0.864 = $864.",
      "Two full periods—its present value is $1,000 × 0.907 = $907."
    ],
    answer: 0,
    explanation: "In an annuity due, the first payment occurs immediately at the beginning of Period 1 (Time 0). Because a payment made today does not need to be discounted back from the future, its present value factor is 1.000, and its present value is the full $1,000."
  },
  {
    id: 462,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "For an n-period annuity due at periodic discount rate i, how is the Present Value Interest Factor for an Annuity (PVIFA) constructed from a standard ordinary annuity PVIFA table?",
    options: [
      "Look up the ordinary annuity PVIFA for (n + 1) periods and subtract 1.000.",
      "Look up the ordinary annuity PVIFA for (n - 1) periods and ADD 1.000.",
      "Look up the ordinary annuity PVIFA for n periods and divide by (1 + i).",
      "Look up the ordinary annuity PVIFA for (n - 1) periods and subtract 1.000."
    ],
    answer: 1,
    explanation: "In an n-period annuity due, the first payment occurs immediately at Time 0 (present value factor = 1.000), and the remaining (n - 1) payments occur at the end of periods 1 through (n - 1). Therefore, PVIFA(Annuity Due, i, n) = PVIFA(Ordinary, i, n - 1) + 1.000."
  },
  {
    id: 463,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "A structured settlement requires an insurer to pay a claimant $10,000 at the BEGINNING of each year for 8 years. The insurer uses a 5% annual discount rate. Looking at a standard ordinary annuity PVIFA table at 5%: PVIFA(5%, 7) = 5.786, PVIFA(5%, 8) = 6.463, and PVIFA(5%, 9) = 7.108. What is the correct PVIFA for this 8-year annuity due, and what is the present value of the settlement?",
    options: [
      "PVIFA = 6.463; Present Value = $64,630",
      "PVIFA = 6.108 (calculated as 7.108 - 1.000); Present Value = $61,080",
      "PVIFA = 6.786 (calculated as 5.786 + 1.000); Present Value = $67,860",
      "PVIFA = 7.463 (calculated as 6.463 + 1.000); Present Value = $74,630"
    ],
    answer: 2,
    explanation: "Using the table-adjustment rule for the present value of an n-period annuity due: look up PVIFA for (n - 1) periods at rate i, and add 1.000. For n = 8 at 5%, look up n - 1 = 7 periods (5.786) and add 1.000 to get 6.786. Multiplying $10,000 × 6.786 = $67,860."
  },
  {
    id: 464,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Compare the Present Value of an Ordinary Annuity with the Present Value of an Annuity Due, assuming both have the exact same periodic payment amount, the same number of periods (n > 1), and the same positive discount rate (i > 0). Which of the following is ALWAYS true?",
    options: [
      "The Present Value of an Ordinary Annuity is greater than the Present Value of an Annuity Due.",
      "The Present Value of an Ordinary Annuity is equal to the Present Value of an Annuity Due.",
      "The Present Value of an Annuity Due is greater than the sum of all undiscounted periodic payments.",
      "The Present Value of an Annuity Due is greater than the Present Value of an Ordinary Annuity."
    ],
    answer: 3,
    explanation: "Because each payment in an annuity due occurs one period sooner than in an ordinary annuity, each payment is discounted by one fewer period (and the first payment is not discounted at all). Consequently, the insurer has less time to earn interest on the reserve before paying out each benefit, meaning a larger initial lump sum (higher PV) is required today to fund an annuity due."
  },
  {
    id: 465,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "A retiree purchases an immediate payout annuity from an insurance company that pays $2,500 per month for 15 years (180 months). Under standard insurance industry practice, when do benefit payments under an immediate payout annuity typically occur?",
    options: [
      "Either at the beginning of each period (annuity due, if the first check is issued immediately at contract inception) or at the end of each period (ordinary annuity, if the first check is issued one month after purchase), depending on the contract terms",
      "Only as a single lump sum at the end of the 15th year",
      "Only after a 10-year accumulation deferral period",
      "Randomly throughout the calendar year based on mortality tables"
    ],
    answer: 0,
    explanation: "Depending on the terms of the payout contract, periodic benefit payments may be structured as an ordinary annuity (paid at the end of each period) or as an annuity due (paid at the beginning of each period). The insurer prices the reserve accordingly using PVIFA."
  },
  {
    id: 466,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Look at any row or column in a standard Present Value Interest Factor for an Annuity (PVIFA) table where i > 0. For any given number of periods n, how does the PVIFA value compare to n itself?",
    options: [
      "The PVIFA value is always strictly greater than n.",
      "The PVIFA value is always strictly less than n.",
      "The PVIFA value is always exactly equal to n.",
      "The PVIFA value is always less than 1.000, regardless of how large n is."
    ],
    answer: 1,
    explanation: "Because each of the n periodic payments of $1.00 in an ordinary annuity occurs in the future and is discounted at a positive interest rate (so each payment's PVIF < 1.000), the sum of n factors that are each less than 1.000 must always be strictly less than n."
  },
  {
    id: 467,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "What happens to the Present Value Interest Factor for an Annuity (PVIFA) as you move DOWN a column (increasing the number of payments n while holding the interest rate i constant), versus as you move ACROSS a row to the right (increasing the interest rate i while holding the number of payments n constant)?",
    options: [
      "PVIFA decreases as n increases, and increases as i increases.",
      "PVIFA decreases both as n increases and as i increases.",
      "PVIFA increases as n increases (more payments add more present value), and decreases as i increases (a higher discount rate reduces the present value of each payment).",
      "PVIFA increases both as n increases and as i increases."
    ],
    answer: 2,
    explanation: "Moving down a PVIFA column (higher n) adds more periodic payments to the annuity stream, so the total present value and PVIFA increase. Moving across a PVIFA row (higher discount rate i) discounts every future payment more heavily, so the PVIFA decreases."
  },
  {
    id: 468,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An insurer is evaluating the purchase of a newly issued corporate bond with a par (face) value of $1,000 that matures in 10 years and pays a 5% annual coupon ($50 at the end of each year for 10 years, plus the $1,000 par value at the end of Year 10). How do investment analysts use present value concepts to determine the fair value (intrinsic market price) of this bond today?",
    options: [
      "By finding the future value of the $50 annual coupons at the end of Year 10 and subtracting $1,000",
      "By multiplying the $1,000 par value by the FVIF for 10 years at the market interest rate",
      "By dividing $1,000 by the 10-year PVIFA factor",
      "By summing the Present Value of the 10-year ordinary annuity of $50 coupon payments (using PVIFA) and the Present Value of the single-sum $1,000 par value maturity payment (using PVIF), both discounted at the investor's required market rate of return"
    ],
    answer: 3,
    explanation: "A bond consists of two distinct cash flow promises: (1) a series of equal periodic coupon interest payments (an ordinary annuity valued using PVIFA) and (2) a single lump-sum repayment of principal/par value at maturity (a single sum valued using PVIF). The bond's fair value today is the sum of these two present values discounted at the required market rate."
  },
  {
    id: 469,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Calculate the fair value today of a 10-year, $1,000 par value bond that pays $50 in annual coupon interest at the end of each year, assuming the investor's required annual rate of return is 6%. At i = 6% and n = 10: PVIF(6%, 10) = 0.558 and PVIFA(6%, 10) = 7.360.",
    options: [
      "$926.00",
      "$1,000.00",
      "$1,073.60",
      "$558.00"
    ],
    answer: 0,
    explanation: "Step 1: PV of maturity par value = $1,000 × PVIF(6%, 10) = $1,000 × 0.558 = $558.00. Step 2: PV of 10 annual $50 coupon payments = $50 × PVIFA(6%, 10) = $50 × 7.360 = $368.00. Step 3: Total fair value of the bond = $558.00 + $368.00 = $926.00. (Because the bond's 5% coupon rate is lower than the 6% required market return, the bond trades at a discount below $1,000)."
  },
  {
    id: 470,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "In the bond valuation scenario above, why is the fair value of the 5% coupon bond ($926.00) less than its $1,000 par value when discounted at a 6% required market rate of return?",
    options: [
      "Because all corporate bonds must legally be sold at a discount to par value at issuance.",
      "Because the bond's stated 5% coupon rate is lower than the 6% market rate required by investors, so buyers will only pay a discounted price today ($926) so that the $50 coupons plus the $74 capital gain at maturity together yield a 6% return.",
      "Because PVIF and PVIFA tables ignore the repayment of principal at maturity.",
      "Because the bond pays interest as an annuity due rather than an ordinary annuity."
    ],
    answer: 1,
    explanation: "When the market's required rate of return (discount rate, 6%) exceeds a bond's fixed coupon rate (5%), the present value of the bond's cash flows falls below par value ($926 < $1,000), allowing the buyer to earn the required 6% return through both the coupons and price appreciation to $1,000 at maturity."
  },
  {
    id: 471,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "How can an equity analyst apply present value discounting to estimate the fair value of a share of common stock that is expected to pay a fixed annual dividend of $3.00 at the end of each year for 5 years and then be sold for $60.00 at the end of Year 5, assuming a required annual return of 8%? (Given: PVIF(8%, 5) = 0.681; PVIFA(8%, 5) = 3.993).",
    options: [
      "Multiply $60.00 by 3.993 and add $3.00 = $242.58",
      "Add $60.00 + (5 × $3.00) = $75.00",
      "Sum the PV of the 5-year dividend annuity ($3.00 × 3.993 = $11.98) and the PV of the Year 5 sale price ($60.00 × 0.681 = $40.86) to get a fair value of $52.84 per share.",
      "Subtract $11.98 from $40.86 to get $28.88 per share."
    ],
    answer: 2,
    explanation: "Just like a bond, the fair value of a stock over a holding period equals the Present Value of the expected periodic dividend stream ($3.00 × PVIFA(8%, 5) = $11.98) plus the Present Value of the expected terminal sale price ($60.00 × PVIF(8%, 5) = $40.86), totaling $52.84."
  },
  {
    id: 472,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An analyst already knows that the Present Value of a 10-year ordinary annuity of $2,000 per year at a 4% discount rate is $16,221.79. Without using any tables, how can the analyst calculate the Present Value of a 10-year ANNUITY DUE of $2,000 per year at the same 4% discount rate?",
    options: [
      "Divide $16,221.79 by 1.04",
      "Subtract $2,000 from $16,221.79",
      "Multiply $16,221.79 by 0.04",
      "Multiply $16,221.79 by (1 + 0.04) = $16,870.66"
    ],
    answer: 3,
    explanation: "Because every payment in an annuity due occurs one period earlier and is therefore discounted by one fewer factor of (1 + i), PV(Annuity Due) = PV(Ordinary Annuity) × (1 + i). Thus, $16,221.79 × 1.04 = $16,870.66."
  },
  {
    id: 473,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "A lottery winner is offered a choice between two prizes: Option 1 is a single cash lump sum of $600,000 paid today; Option 2 is 20 annual payments of $45,000 ($900,000 total undiscounted) paid at the end of each year for 20 years. If the winner can earn 5% compounded annually on investments (where PVIFA(5%, 20) = 12.462), which option has the higher Present Value today?",
    options: [
      "Option 1 ($600,000 lump sum today), because the Present Value of Option 2 is only $45,000 × 12.462 = $560,790.",
      "Option 2 ($45,000/year for 20 years), because $900,000 is always worth more than $600,000 regardless of the interest rate.",
      "Both options have the exact same Present Value of $600,000.",
      "Option 2, because its Present Value is $600,000 × 12.462 = $7,477,200."
    ],
    answer: 0,
    explanation: "To compare cash flows occurring at different times, both must be evaluated at the same point in time (Present Value today). Option 1 has a PV of $600,000. Option 2 is a 20-year ordinary annuity whose PV at 5% is $45,000 × 12.462 = $560,790. Therefore, Option 1 ($600,000 today) has the greater economic value by $39,210."
  },
  {
    id: 474,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "What if the lottery in the previous question paid the 20 annual installments of $45,000 at the BEGINNING of each year (an annuity due, with the first $45,000 paid immediately today) at the same 5% discount rate (where PVIFA(5%, 19) = 12.085)? What would be the Present Value of the annuity due, and how would it compare to the $600,000 lump sum?",
    options: [
      "The PV of the annuity due would be $543,825, still less than $600,000.",
      "The PV of the annuity due would be $45,000 × (12.085 + 1.000) = $588,825, which is higher than the ordinary annuity ($560,790) but still less than the $600,000 lump sum.",
      "The PV of the annuity due would be $633,825, exceeding the $600,000 lump sum.",
      "The PV of the annuity due would be identical to the ordinary annuity at $560,790."
    ],
    answer: 1,
    explanation: "For a 20-year annuity due at 5%, PVIFA = PVIFA(5%, 19) + 1.000 = 12.085 + 1.000 = 13.085. Multiplying $45,000 × 13.085 = $588,825. While receiving payments at the beginning of each year adds $28,035 in value compared to the ordinary annuity, $588,825 is still slightly less than the $600,000 cash lump sum."
  },
  {
    id: 475,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An actuary is pricing a single-premium immediate annuity (SPIA) that will pay a policyowner $3,000 at the end of every 6 months (semiannually) for 10 years. If the insurer assumes a nominal annual interest rate of 6% compounded semiannually, which PVIFA table coordinates (n and i) must the actuary use to determine the single premium required today?",
    options: [
      "n = 10 periods; i = 6%",
      "n = 10 periods; i = 3%",
      "n = 20 periods; i = 3%",
      "n = 20 periods; i = 6%"
    ],
    answer: 2,
    explanation: "Because payments and compounding occur semiannually (twice a year) over 10 years, there are n = 10 × 2 = 20 semiannual periods, and the periodic discount rate is i = 6% / 2 = 3% per semiannual period."
  },
  {
    id: 476,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "If an analyst knows that the Future Value Interest Factor (FVIF) for 8% over 5 periods is 1.469, how can the analyst calculate the Present Value Interest Factor (PVIF) for 8% over 5 periods without looking at a PVIF table?",
    options: [
      "Subtract 1.000 from 1.469 to get 0.469",
      "Multiply 1.469 by 0.08 to get 0.118",
      "Subtract 0.469 from 1.000 to get 0.531",
      "Divide 1.000 by 1.469 to get 0.681"
    ],
    answer: 3,
    explanation: "Because PVIF and FVIF are mathematical reciprocals for the same interest rate i and number of periods n, PVIF(8%, 5) = 1 / FVIF(8%, 5) = 1 / 1.469 = 0.6807 (or 0.681 rounded to three decimal places)."
  },
  {
    id: 477,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Why is it INCORRECT to say that the Present Value Interest Factor for an Annuity (PVIFA) is the reciprocal of the Future Value Interest Factor for an Annuity (FVIFA)?",
    options: [
      "Because PVIFA is the sum of reciprocals of individual FVIFs, and in mathematics the sum of reciprocals (1/a + 1/b) is NOT equal to the reciprocal of the sum [1 / (a + b)].",
      "Because PVIFA only applies to simple interest, whereas FVIFA applies to compound interest.",
      "Because PVIFA values are always negative numbers, whereas FVIFA values are positive.",
      "Because PVIFA is always equal to FVIFA multiplied by the number of periods."
    ],
    answer: 0,
    explanation: "While a single-sum PVIF is the reciprocal of a single-sum FVIF, an annuity factor (PVIFA) is the sum of multiple single-sum PVIFs. Mathematically, 1/FVIFA is the sinking-fund factor (how much to save each period to reach $1 in the future), NOT the PVIFA (how much $1 per period is worth today)."
  },
  {
    id: 478,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "A life insurance beneficiary elects a fixed-period settlement option under which the $200,000 death benefit is held by the insurer at 4% annual interest and paid out in 10 equal annual installments at the end of each year. Given that PVIFA(4%, 10) = 8.111, how can the insurer determine the dollar amount of each annual installment payment?",
    options: [
      "Multiply $200,000 by 8.111 to get $1,622,200 per year",
      "Divide the $200,000 Present Value by the PVIFA of 8.111 to get $24,657.87 per year",
      "Divide $200,000 by 10 years and subtract 4% to get $19,200 per year",
      "Multiply $200,000 by 0.04 to get $8,000 per year"
    ],
    answer: 1,
    explanation: "Since PV(Ordinary Annuity) = Periodic Payment × PVIFA(i, n), we can solve for the unknown Periodic Payment by dividing the known Present Value ($200,000) by the PVIFA (8.111): Payment = $200,000 / 8.111 = $24,657.87 per year."
  },
  {
    id: 479,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Similarly, suppose an insurance company wants to accumulate a $500,000 reserve fund at the end of 5 years by making 5 equal annual deposits at the end of each year into an account earning 6% compounded annually. Given FVIFA(6%, 5) = 5.637, how much must the insurer deposit at the end of each year?",
    options: [
      "$100,000.00",
      "$70,000.00",
      "$88,699.66 (calculated by dividing the $500,000 Future Value by the FVIFA of 5.637)",
      "$106,000.00"
    ],
    answer: 2,
    explanation: "Since FV(Ordinary Annuity) = Periodic Payment × FVIFA(i, n), solving for the required periodic deposit gives Payment = FV / FVIFA(6%, 5) = $500,000 / 5.637 = $88,699.66 per year."
  },
  {
    id: 480,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "In a standard PVIFA table for an ordinary annuity, look at the first row where the number of periods is n = 1. How do the values in the n = 1 row of a PVIFA table compare to the values in the n = 1 row of a single-sum PVIF table?",
    options: [
      "Every value in the n = 1 row of a PVIFA table is 1.000, whereas the n = 1 row of a PVIF table is 1 / (1 + i).",
      "The n = 1 row of a PVIFA table is exactly double the n = 1 row of a PVIF table.",
      "Every value in the n = 1 row of a PVIFA table is zero.",
      "They are identical—because a 1-period ordinary annuity consists of a single payment made at the end of Period 1, its present value factor is 1 / (1 + i), matching the single-sum PVIF(i, 1)."
    ],
    answer: 3,
    explanation: "Unlike an FVIFA table (where n = 1 is always 1.000 because the payment at the end of Period 1 earns 0 periods of future interest), in a PVIFA table a single payment at the end of Period 1 must be discounted back 1 full period to Time 0. Therefore, for n = 1, PVIFA(i, 1) = PVIF(i, 1) = 1 / (1 + i)."
  },
  {
    id: 481,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "During an economic downturn, market interest rates plunge from 6% to 2%. How does this decline in interest rates affect the present value (reserve liability) that a life insurance company must hold today to fund its guaranteed fixed future benefit obligations?",
    options: [
      "The present value required today INCREASES substantially, because at a lower 2% investment return, the insurer needs a much larger initial reserve today to grow into the promised future benefit amounts.",
      "The present value required today DECREASES, because lower interest rates reduce future benefit promises.",
      "The present value required today remains unchanged, because statutory reserves are not discounted.",
      "The present value required today drops to zero."
    ],
    answer: 0,
    explanation: "For any fixed future cash obligation, the Present Value moves INVERSELY to the interest/discount rate. When interest rates fall from 6% to 2%, each invested dollar earns less compound interest over time, so the insurer must hold a much larger Present Value reserve today to meet the same future obligation."
  },
  {
    id: 482,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "A policyholder owes 4 annual lease payments of $12,000 each, due at the BEGINNING of each year. If the lessor offers to let the policyholder pay off the entire 4-year lease today at an 8% annual discount rate (given ordinary annuity PVIFA(8%, 3) = 2.577 and PVIFA(8%, 4) = 3.312), what is the exact lump-sum payoff amount today?",
    options: [
      "$39,744",
      "$42,924",
      "$30,924",
      "$48,000"
    ],
    answer: 1,
    explanation: "Because lease payments are due at the beginning of each year, this is a 4-year annuity due. Using the table rule: PVIFA(Annuity Due, 8%, 4) = PVIFA(Ordinary, 8%, 3) + 1.000 = 2.577 + 1.000 = 3.577. Multiplying $12,000 × 3.577 = $42,924."
  },
  {
    id: 483,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Given the single-sum PVIF values at 7%: PVIF(7%, 1) = 0.935, PVIF(7%, 2) = 0.873, PVIF(7%, 3) = 0.816, and PVIF(7%, 4) = 0.763. What is the PVIFA for a 4-period ANNUITY DUE at 7%?",
    options: [
      "3.387",
      "2.624",
      "3.624",
      "4.387"
    ],
    answer: 2,
    explanation: "In a 4-period annuity due, the 1st payment is at Time 0 (factor = 1.000), the 2nd is discounted 1 period (0.935), the 3rd is discounted 2 periods (0.873), and the 4th is discounted 3 periods (0.816). Summing them gives 1.000 + 0.935 + 0.873 + 0.816 = 3.624."
  },
  {
    id: 484,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Using the same single-sum PVIF values at 7% from the previous question—PVIF(7%, 1) = 0.935, PVIF(7%, 2) = 0.873, PVIF(7%, 3) = 0.816, and PVIF(7%, 4) = 0.763—what is the PVIFA for a 4-period ORDINARY ANNUITY at 7%?",
    options: [
      "3.624",
      "4.387",
      "2.624",
      "3.387"
    ],
    answer: 3,
    explanation: "In a 4-period ordinary annuity, payments occur at the end of periods 1, 2, 3, and 4: PVIFA(Ordinary, 7%, 4) = 0.935 + 0.873 + 0.816 + 0.763 = 3.387."
  },
  {
    id: 485,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An investor is offered a financial contract that promises to pay $10,000 at the end of Year 1, $15,000 at the end of Year 2, and $25,000 at the end of Year 3. Because the periodic cash flows are UNEQUAL, how must the investor calculate the Present Value of this cash flow stream at a 6% discount rate?",
    options: [
      "Calculate the Present Value of each year's cash flow separately using the respective single-sum PVIF for Year 1, Year 2, and Year 3, and then sum the three individual present values.",
      "Average the three payments ($16,667) and multiply by the 3-year PVIFA factor at 6%.",
      "Sum the three payments ($50,000) and multiply by the single-sum PVIF for Year 3.",
      "Multiply the largest payment ($25,000) by the 3-year FVIFA factor."
    ],
    answer: 0,
    explanation: "Annuity factors (PVIFA/FVIFA) can ONLY be applied to a series of EQUAL periodic payments. When periodic cash flows are unequal, each cash flow must be discounted individually as a single sum using its corresponding PVIF(i, n), and the resulting present values are then summed."
  },

  // =========================================================================
  // COMPREHENSIVE SYNTHESIS: Core Governing Rules of FV & PV, Solver Usage,
  // and Insurance Applications (Questions 86–100)
  // =========================================================================
  {
    id: 486,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "In LOMA 307 Chapter 4, the fundamental governing rules of Future Value (FV) and Present Value (PV) summarize how changes in the interest rate (i) and number of periods (n) affect single sums and annuities. Which of the following statements accurately states a core governing rule?",
    options: [
      "For a given present value, the future value decreases as the interest rate increases.",
      "For a given future value, the present value DECREASES as either the interest rate (i) increases or the number of periods (n) increases.",
      "The present value of an ordinary annuity is always greater than the present value of an otherwise identical annuity due.",
      "The future value of an ordinary annuity is always greater than the future value of an otherwise identical annuity due."
    ],
    answer: 1,
    explanation: "One of the core governing rules of Chapter 4 is that for a given Future Value, the Present Value decreases as the interest rate increases (for a given n) and decreases as the number of periods increases (for a given i). Conversely, for a given PV, FV increases as i or n increases; and both the FV and PV of an annuity due exceed those of an ordinary annuity."
  },
  {
    id: 487,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Why do financial analysts sometimes find small dollar differences (such as a few dollars on a $100,000 calculation) when comparing a result calculated using a published 3-decimal-place interest factor table (PVIF/FVIF) against a result calculated using a spreadsheet or dedicated financial calculator?",
    options: [
      "Spreadsheet formulas use simple interest by default, whereas factor tables use compound interest.",
      "Factor tables assume monthly compounding, whereas financial calculators assume annual compounding.",
      "Published interest factor tables round the factors (typically to three decimal places), whereas spreadsheets and financial calculators compute the exponential formulas to many decimal places of precision before rounding the final dollar output.",
      "Published interest factor tables include a built-in 0.5% inflation deduction."
    ],
    answer: 2,
    explanation: "Interest factor tables round values (e.g., to three decimal places like 1.276), introducing slight rounding variance when multiplied by large dollar amounts. Financial calculators and spreadsheets carry full floating-point precision through the calculation."
  },
  {
    id: 488,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An actuary is comparing four annuity contracts, all having 10 annual payments of $5,000 and an annual interest rate of 6%. Without performing any calculations, rank the following four values from LARGEST dollar amount to SMALLEST dollar amount:\n1. Future Value of the 10-year Annuity Due\n2. Future Value of the 10-year Ordinary Annuity\n3. Present Value of the 10-year Annuity Due\n4. Present Value of the 10-year Ordinary Annuity",
    options: [
      "4 > 3 > 2 > 1",
      "2 > 1 > 4 > 3",
      "1 > 3 > 2 > 4",
      "1 > 2 > 3 > 4"
    ],
    answer: 3,
    explanation: "At any positive interest rate: both Future Values exceed $50,000 (the sum of the 10 payments), with FV(Annuity Due) [1] > FV(Ordinary Annuity) [2]. Both Present Values are less than $50,000 (because future payments are discounted), with PV(Annuity Due) [3] > PV(Ordinary Annuity) [4]. Thus, the exact order from largest to smallest is 1 > 2 > 3 > 4."
  },
  {
    id: 489,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Suppose a 5-year annuity pays $1,000 per year, and the interest rate is 0% (zero percent). At an interest rate of 0%, how do the Future Value of the Ordinary Annuity, the Future Value of the Annuity Due, the Present Value of the Ordinary Annuity, and the Present Value of the Annuity Due compare?",
    options: [
      "All four values are exactly equal to $5,000 (5 × $1,000), because when the interest rate is 0%, money has no time-earning power and neither compounding nor discounting changes the dollar value of cash flows.",
      "The Future Values are $5,000, while the Present Values are $0.",
      "The Annuity Due values are $6,000, while the Ordinary Annuity values are $4,000.",
      "The Present Values are $5,000, while the Future Values are $10,000."
    ],
    answer: 0,
    explanation: "When i = 0%, (1 + 0)^n = 1.000 for all periods. Neither compounding nor discounting changes any payment's value, so all four measures equal the simple sum of the 5 payments: 5 × $1,000 = $5,000."
  },
  {
    id: 490,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "A financial analyst wants to know what annual compound interest rate (i) was earned on a single-sum investment of $10,000 that grew to $14,690 over 5 years. How can the analyst use a standard Future Value Interest Factor (FVIF) table to find the unknown interest rate?",
    options: [
      "Divide $10,000 by $14,690 to get 0.681, then look along the n = 5 row of the FVIF table for 0.681.",
      "Divide the Future Value ($14,690) by the Present Value ($10,000) to find the FVIF of 1.469, then scan across the n = 5 period row in the FVIF table until locating 1.469 (which corresponds to the 8% column).",
      "Subtract $10,000 from $14,690 and divide by 5 years to get $938, which equals 9.38%.",
      "Use the Rule of 72 to divide 72 by 5 years to get 14.4%."
    ],
    answer: 1,
    explanation: "Since FV = PV × FVIF(i, n), we can solve for FVIF(i, n) = FV / PV = $14,690 / $10,000 = 1.469. Looking across the n = 5 row of the FVIF table, 1.469 appears under the i = 8% column."
  },
  {
    id: 491,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Similarly, suppose an investor deposits $25,000 today into an account earning 6% compounded annually and wants to know how many years (n) it will take for the balance to reach $44,775. How can the investor find n using an FVIF table?",
    options: [
      "Divide $25,000 by $44,775 to get 0.558, then scan down the 6% column of the FVIF table.",
      "Divide the $19,775 gain by $1,500 per year to get 13.18 years.",
      "Divide FV ($44,775) by PV ($25,000) to get FVIF = 1.791, then scan down the i = 6% column of the FVIF table until locating 1.791 (which corresponds to row n = 10 years).",
      "Multiply 6% by 25 to get 15 years."
    ],
    answer: 2,
    explanation: "Since FVIF(6%, n) = FV / PV = $44,775 / $25,000 = 1.791, scanning down the 6% column of the FVIF table locates 1.791 at row n = 10 periods (10 years)."
  },
  {
    id: 492,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "A life insurer's asset-liability management (ALM) team is evaluating a 20-year zero-coupon Treasury bond (which pays no periodic coupon interest, only a single $10,000 face value payment at maturity in 20 years) versus a 5-year zero-coupon Treasury bond (which pays $10,000 at maturity in 5 years). If market interest rates suddenly rise from 4% to 6%, which bond's Present Value (market price) will experience the LARGER percentage drop?",
    options: [
      "The 5-year zero-coupon bond, because short-term discounting is more sensitive to interest rate changes.",
      "Both bonds will drop by the exact same percentage because both have a $10,000 face value.",
      "Neither bond's price will change because zero-coupon bonds do not pay periodic interest.",
      "The 20-year zero-coupon bond, because a higher discount rate compounds exponentially over 20 periods in the denominator [1 / (1 + i)^20], causing a much steeper drop in Present Value over longer horizons."
    ],
    answer: 3,
    explanation: "Because discounting divides by (1 + i)^n, a change in the discount rate i is raised to the nth power. Over 20 periods (n = 20), an increase from 4% to 6% reduces PVIF from 0.456 to 0.312 (a 31.6% drop), whereas over 5 periods (n = 5) PVIF drops from 0.822 to 0.747 (only a 9.1% drop)."
  },
  {
    id: 493,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An individual aged 35 wants to have $1,000,000 at age 65 (30 years from today). Her Twin Sister waits until age 45 to start saving for the same $1,000,000 goal at age 65 (20 years from today). Assuming both sisters earn 7% compounded annually (where FVIF(7%, 30) = 7.612 and FVIF(7%, 20) = 3.870), how much must each sister invest as a single sum when she starts?",
    options: [
      "The 35-year-old needs $131,372 today ($1,000,000 / 7.612), whereas the 45-year-old will need $258,398 ($1,000,000 / 3.870)—nearly double the initial deposit because she lost 10 years of compounding.",
      "The 35-year-old needs $258,398, whereas the 45-year-old needs $131,372.",
      "Both sisters need $131,372 because the interest rate is 7% for both.",
      "The 35-year-old needs $131,372, whereas the 45-year-old needs $197,058 (exactly 50% more)."
    ],
    answer: 0,
    explanation: "At 7%, money roughly doubles every 10.3 years (Rule of 72: 72 / 7 = 10.3). Because the first sister has 30 years of compounding (FVIF = 7.612, so PVIF = 1 / 7.612 = 0.13137), she needs $131,372. Waiting 10 years leaves only 20 years of compounding (FVIF = 3.870, so PVIF = 0.2584), requiring $258,398—almost twice as much initial principal."
  },
  {
    id: 494,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Which of the following equations correctly summarizes the mathematical relationship between the four standard interest factors for a single sum and an ordinary annuity at periodic rate i and period n?",
    options: [
      "FVIF(i, n) + PVIF(i, n) = 1.000",
      "FVIF(i, n) × PVIF(i, n) = 1.000",
      "FVIFA(i, n) × PVIFA(i, n) = 1.000",
      "FVIFA(i, n) - PVIFA(i, n) = n"
    ],
    answer: 1,
    explanation: "Because FVIF(i, n) = (1 + i)^n and PVIF(i, n) = 1 / (1 + i)^n, they are exact reciprocals of each other, meaning their product FVIF(i, n) × PVIF(i, n) always equals 1.000."
  },
  {
    id: 495,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "An insurer offers a 10-year deferred annuity contract where the policyowner pays a single premium of $50,000 today. For the first 4 years, the insurer credits 6% annual compound interest; for the remaining 6 years, the insurer credits the guaranteed minimum rate of 3% annual compound interest. Given FVIF(6%, 4) = 1.262 and FVIF(3%, 6) = 1.194, how is the contract's accumulated value at the end of Year 10 calculated?",
    options: [
      "Average the two rates to 4.5% and compound $50,000 at 4.5% for 10 years.",
      "Add the two factors (1.262 + 1.194 = 2.456) and multiply by $50,000 to get $122,800.",
      "First compound $50,000 for 4 years at 6% ($50,000 × 1.262 = $63,100), and then treat that $63,100 Year 4 balance as the new Present Value to compound for the next 6 years at 3% ($63,100 × 1.194 = $75,341.40).",
      "Compound $50,000 at 3% for 10 years because the minimum guaranteed rate overrides earlier credits."
    ],
    answer: 2,
    explanation: "When interest rates change across sequential multi-year segments, you first calculate the Future Value at the end of the first segment ($50,000 × 1.262 = $63,100 at Year 4), and then use that accumulated balance as the starting Present Value for the second segment ($63,100 × 1.194 = $75,341.40 at Year 10)."
  },
  {
    id: 496,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "A retired couple wants to withdraw $40,000 at the BEGINNING of each year for 15 years to cover living expenses. Their retirement fund earns 5% compounded annually. Given ordinary annuity PVIFA values at 5%: PVIFA(5%, 14) = 9.899, PVIFA(5%, 15) = 10.380, and PVIFA(5%, 16) = 10.838. What lump-sum balance must they have in their retirement fund on the day they retire (when they immediately withdraw the first $40,000)?",
    options: [
      "$415,200",
      "$395,960",
      "$433,520",
      "$435,960"
    ],
    answer: 3,
    explanation: "Because withdrawals occur at the beginning of each year, this is a 15-year annuity due. Using the table rule: PVIFA(Annuity Due, 5%, 15) = PVIFA(Ordinary, 5%, 14) + 1.000 = 9.899 + 1.000 = 10.899. Multiplying $40,000 × 10.899 = $435,960. (Notice that after they immediately withdraw the first $40,000 on Day 1, the remaining $395,960 balance equals $40,000 × 9.899, which funds the remaining 14 end-of-year withdrawals)."
  },
  {
    id: 497,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "In the retirement scenario above, notice how after the couple withdraws their first $40,000 payment immediately at retirement from the $435,960 fund, the remaining $395,960 balance is exactly equal to the Present Value of a 14-year ordinary annuity of $40,000 at 5% ($40,000 × 9.899). Why does this occur?",
    options: [
      "Because once the first immediate payment at Time 0 is removed from an n-period annuity due, the remaining (n - 1) payments occur at the end of Periods 1 through (n - 1), which is identical to an (n - 1)-period ordinary annuity.",
      "Because the interest rate drops to 0% in the final year of retirement.",
      "Because an annuity due always has one fewer total payment than an ordinary annuity.",
      "Because the last payment of an annuity due is never discounted."
    ],
    answer: 0,
    explanation: "This illustrates the exact intuition behind the formula PVIFA(Annuity Due, i, n) = PVIFA(Ordinary, i, n - 1) + 1: an n-period annuity due is simply 1 immediate payment today (factor = 1.000) plus an (n - 1)-period ordinary annuity for the remaining (n - 1) payments."
  },
  {
    id: 498,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Which of the following scenarios requires calculating the PRESENT VALUE OF A SINGLE SUM?",
    options: [
      "Determining how much a series of 20 annual $2,000 IRA contributions will grow to at retirement",
      "Determining how much money an insurer must invest in a dedicated reserve account today to pay a single $1,000,000 commercial mortgage balloon maturity obligation due in 7 years",
      "Determining the monthly mortgage payment required to pay off a $300,000 home loan over 30 years",
      "Determining how much a single $25,000 certificate of deposit will be worth after compounding at 4% for 5 years"
    ],
    answer: 1,
    explanation: "Determining the single lump sum required today to fund a single known lump-sum obligation in the future ($1,000,000 in 7 years) is a Present Value of a Single Sum calculation."
  },
  {
    id: 499,
    lo: "4B: Explain future value and calculate the future value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Which of the following scenarios requires calculating the FUTURE VALUE OF AN ANNUITY DUE?",
    options: [
      "Calculating the current market price of a corporate bond that pays semiannual coupons at the end of each six-month period",
      "Calculating the lump sum required today to pay a lottery winner $50,000 at the beginning of each year for 25 years",
      "Calculating the total accumulated cash value at the end of Year 15 when a policyowner deposits $3,600 on the first day of every policy year for 15 years at 4% annual compound interest",
      "Calculating the ending value of a single $50,000 inheritance invested for 10 years at 6%"
    ],
    answer: 2,
    explanation: "Because equal periodic deposits ($3,600) are made at the BEGINNING of every period (first day of every policy year) and the goal is to find the accumulated value at the END of the 15-year horizon, this is a Future Value of an Annuity Due calculation."
  },
  {
    id: 500,
    lo: "4C: Explain present value and calculate the present value of a single sum, an ordinary annuity, and an annuity due.",
    question: "Review the complete framework of Chapter 4 (The Time Value of Money). Which statement accurately synthesizes why time-value-of-money calculations are foundational to life insurance and annuity product operations?",
    options: [
      "Insurers collect premiums in the future and pay benefits in the past, requiring simple interest adjustments.",
      "Time value of money calculations apply only to stock market speculation and are prohibited in statutory reserve accounting.",
      "Insurers rely on the Rule of 72 to set exact policy premium rates without mortality tables.",
      "Because life insurers collect premiums today (as single sums or annuities due) and invest them to fund future benefit obligations (paid as single death benefits or periodic annuity payouts years or decades later), both compounding (FV) and discounting (PV) are essential for pricing products, setting reserves, and valuing investments."
    ],
    answer: 3,
    explanation: "Life insurance and annuity contracts span years or decades between when premiums are collected and when benefits are paid. Compounding (FV) projects how invested premiums accumulate over time, while discounting (PV) determines the reserves required today to meet future contractual obligations and values fixed-income and equity investments."
  }
];
