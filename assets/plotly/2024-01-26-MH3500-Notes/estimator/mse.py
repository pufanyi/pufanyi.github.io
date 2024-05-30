import plotly.graph_objects as go
import numpy as np
import math


N = 5

def MSE(w, x):
    return w * w * x * (1 - x) / (N * N) + (1 - w) ** 2 * (.5 - x) ** 2


if __name__ == "__main__":
    x = np.arange(0, 1, 0.01)
    fig = go.Figure()

    y = [MSE(1, i) for i in x]
    fig.add_trace(
        go.Scatter(
            visible=True,
            name="unbiased estimator [w = 1]",
            x=x,
            y=y,
        )
    )
    
    y = [MSE(N / (N + 0.5), i) for i in x]
    fig.add_trace(
        go.Scatter(
            visible=True,
            name="biased estimator [w = n / (n + 0.5)]",
            x=x,
            y=y,
        )
    )

    fig.update_layout(
        title=f"MSE for different values of w (n = {N})",
        xaxis_title="x",
        yaxis_title="MSE",
    )
    # fig.show()

    fig.write_html("mse.html", auto_open=True)
