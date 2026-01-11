String.prototype.nthIndexOf = function(searchElement, n, fromElement)
{
    n = n || 0;
    fromElement = fromElement || 0;
    while (n > 0)
    {
        fromElement = this.indexOf(searchElement, fromElement);
        if (fromElement < 0)
        {
            return -1;
        }
        --n;
        ++fromElement;
    }
    return fromElement - 1;
};
