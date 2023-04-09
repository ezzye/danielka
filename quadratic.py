import numpy as np
import matplotlib.pyplot as plt

# define the quadratic equation
def quadratic(x):
    return x**2 + 5*x + 6

# define the two linear equations resulting from factorization
def linear1(x):
    return x + 2
def linear2(x):
    return x + 3

# create a range of x values
x = np.linspace(-5, 0, 100)

# plot the quadratic equation and the two linear equations
plt.plot(x, quadratic(x), label='Quadratic')
plt.plot(x, linear1(x), label='Linear 1')
plt.plot(x, linear2(x), label='Linear 2')

# add labels and legend
plt.xlabel('x')
plt.ylabel('y')
plt.title('Quadratic Equation and its Factorization')
plt.legend()

# display the plot
plt.show()
