class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


def flipEquiv(root1: TreeNode, root2: TreeNode) -> bool:
    def getValue(node: TreeNode):
        if not node:
            return None
        else:
            return node.val

    def recur(r1, r2):
        if not r1 and not r2:
            return True

        if getValue(r1) != getValue(r2):
            return False

        if getValue(r1.left) == getValue(r2.right) and getValue(r2.left) == getValue(r1.right):
            # flip
            return recur(r1.left, r2.right) and recur(r2.left, r1.right)
        else:
            # no flip
            return recur(r1.right, r2.right) and recur(r2.left, r1.left)

    return recur(root1, root2)
