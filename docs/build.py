import glob
import os
import re

file_regex = re.compile("")
basedir = os.path.dirname(__file__)
if __name__ == '__main__':
    files = glob.glob(basedir, recursive=True)
    for file in files:
        pass