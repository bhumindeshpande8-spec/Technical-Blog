**`src/posts/numpy-matrix-ops.md`**
```markdown
# Scientific Computing with NumPy

Transitioning from standard iterative loops to vectorized operations in Python drastically reduces compute time due to underlying C implementations.

### Broadcasting
Broadcasting allows NumPy to perform mathematical operations on arrays of different shapes without explicitly replicating data in memory.

```python
import numpy as np

# A 3x3 matrix
A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# A 1D array
b = np.array([10, 20, 30])

# b is automatically broadcast across each row of A
result = A + b
